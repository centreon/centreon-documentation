---
id: technical
title: Technical information
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Tables of network flows

### Tables of network flows to integrate monitoring platform to IT

#### Central server

| From           | To             | Protocol   | Port               | Application                                                                        |
|----------------|----------------|------------|--------------------|------------------------------------------------------------------------------------|
| Central server | NTP server     | NTP        | UDP 123            | Synchronization of the system clock                                                |
| Central server | DNS server     | DNS        | UDP 53             | Domain name resolution                                                             |
| Central server | SMTP server    | SMTP       | TCP 25             | Notification via email                                                             |
| Central server | LDAP(s) server | LDAP(s)    | TCP 389 (636)      | Authentication to access the Centreon web interface                                |
| Central server | DBMS server    | MySQL      | TCP 3306           | Access to Centreon databases (if moved to a dedicated server)                   |
| Central server | HTTP Proxy     | HTTP(s)    | TCP 80, 8080 (443) | If your platform needs to connect to a web proxy to access the Centreon IT Edition |
| Central server | Repository     | HTTP (FTP) | TCP 80 (FTP 20)    | Repository for system and application packages                                     |

#### Poller

| From   | To          | Protocol   | Port               | Application                                    |
|--------|-------------|------------|--------------------|------------------------------------------------|
| Poller | NTP server  | NTP        | UDP 123            | Synchronization of the system clock            |
| Poller | DNS server  | DNS        | UDP 53             | Domain name resolution                         |
| Poller | SMTP server | SMTP       | TCP 25             | Notification via email                         |
| Poller | Repository  | HTTP (FTP) | TCP 80 (FTP 20,21) | Repository for system and application packages |

#### Remote Server

| From          | To             | Protocol   | Port            | Application                                                      |
|---------------|----------------|------------|-----------------|------------------------------------------------------------------|
| Remote Server | NTP server     | NTP        | UDP 123         | Synchronization of the system clock                              |
| Remote Server | DNS server     | DNS        | UDP 53          | Domain name resolution                                           |
| Remote Server | SMTP server    | SMTP       | TCP 25          | Notification via email                                           |
| Remote Server | LDAP(s) server | LDAP(s)    | TCP 389 (636)   | Authentication to access the Centreon web interface              |
| Remote Server | DBMS server    | MySQL      | TCP 3306        | Access to Centreon databases (if moved to a dedicated server) |
| Remote Server | Repository     | HTTP (FTP) | TCP 80 (FTP 20) | Repository for system and application packages                   |

> Other flows can be necessary for Centreon web authentication (RADIUS, etc.)
> or notification system defined.

### Tables of platform flows

#### Poller

| From           | To             | Protocol     | Port         | Application                                                        |
|----------------|----------------|--------------|--------------|--------------------------------------------------------------------|
| Central server | Poller         | ZMQ          | TCP 5556     | Export of Centreon configuration (depending on communication type) |
| Central server | Poller         | SSH (legacy) | TCP 22       | Export of Centreon configuration (depending on communication type) |
| Poller         | Central server | BBDO         | TCP 5669     | Transfer of collected data                                         |
| Poller         | Central server | HTTP(S)      | TCP 80 (443) | Poller registration                                                |

#### Remote Server

| From           | To             | Protocol     | Port         | Application                                                        |
|----------------|----------------|--------------|--------------|--------------------------------------------------------------------|
| Central server | Remote Server  | ZMQ          | TCP 5556     | Export of Centreon configuration                                   |
| Remote Server  | Central server | BBDO         | TCP 5669     | Transfer of collected data                                         |
| Remote Server  | Central server | HTTP(S)      | TCP 80 (443) | Remote Server registration                                         |
| Remote Server  | Poller         | ZMQ          | TCP 5556     | Export of Centreon configuration (depending on communication type) |
| Remote Server  | Poller         | SSH (legacy) | TCP 22       | Export of Centreon configuration (depending on communication type) |
| Poller         | Remote Server  | BBDO         | TCP 5669     | Transfer of collected data                                         |
| Poller         | Remote Server  | HTTP(S)      | TCP 80 (443) | Poller registration                                                |

> If Remote Server is not used as proxy for a Poller, Poller network flows
> apply.

#### Monitoring

| From              | To                               | Protocol   | Port      | Application |
|-------------------|----------------------------------|------------|-----------|-------------|
| Poller            | Network equipment, servers, etc. | SNMP       | UDP 161   | Monitoring  |
| Network equipment | Poller                           | Trap SNMP  | UDP 162   | Monitoring  |
| Poller            | Servers                          | NRPE       | TCP 5666  | Monitoring  |
| Poller            | Servers                          | NSClient++ | TCP 12489 | Monitoring  |

> If the Centreon server is a poller too, remember to open monitoring
> flows.

> Other flows can be necessary to monitor databases, access to API, or
> application ports.

## Users and groups

Description of software and linked users:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

| Software          | Service          | User             | Comment         |
| ----------------- | ---------------- | ---------------- | --------------- |
| Apache            | httpd            | apache           | automatic start |
| PHP-FPM           | php-fpm          | apache           | automatic start |
| MariaDB           | mariadb          | mysql            | automatic start |
| Centreon          | centreontrapd    | centreon         | automatic start |
| Centreon Broker   | cbwd             | centreon-broker  | automatic start |
| Centreon Broker   | cbd              | centreon-broker  | automatic start |
| Centreon Engine   | centengine       | centreon-engine  | automatic start |
| Centreon Gorgone  | gorgoned         | centreon-gorgone | automatic start |

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

| Software          | Service          | User             | Comment         |
| ----------------- | ---------------- | ---------------- | --------------- |
| Apache            | httpd            | apache           | automatic start |
| PHP-FPM           | php-fpm          | apache           | automatic start |
| MariaDB           | mariadb          | mysql            | automatic start |
| Centreon          | centreontrapd    | centreon         | automatic start |
| Centreon Broker   | cbwd             | centreon-broker  | automatic start |
| Centreon Broker   | cbd              | centreon-broker  | automatic start |
| Centreon Engine   | centengine       | centreon-engine  | automatic start |
| Centreon Gorgone  | gorgoned         | centreon-gorgone | automatic start |

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

| Software          | Service          | User             | Comment         |
| ----------------- | ---------------- | ---------------- | --------------- |
| Apache            | apache2          | www-data         | automatic start |
| PHP-FPM           | php-fpm          | apache           | automatic start |
| MariaDB           | mariadb          | mysql            | automatic start |
| Centreon          | centreontrapd    | centreon         | automatic start |
| Centreon Broker   | cbwd             | centreon-broker  | automatic start |
| Centreon Broker   | cbd              | centreon-broker  | automatic start |
| Centreon Engine   | centengine       | centreon-engine  | automatic start |
| Centreon Gorgone  | gorgoned         | centreon-gorgone | automatic start |
</TabItem>
</Tabs>

Description of optional software and linked users:

| Software        | Service         | User      | Comment                                            |
|-----------------|-----------------|-----------|----------------------------------------------------|
| Centreon VMware | centreon_vmware | centreon  | not installed by default                           |
| RRDtool         | rrdcached       | rrdcached | not enabled and not defined in Centreon by default |

Description of groups and linked users for Centreon Open Source and IT Edition:

| Group            | Users                                                            |
|------------------|------------------------------------------------------------------|
| apache           | nagios,centreon,centreon-gorgone                                 |
| centreon         | centreon-engine,centreon-broker,apache,centreon-gorgone          |
| centreon-broker  | centreon,nagios,centreon-engine,apache,centreon-gorgone          |
| centreon-engine  | centreon-broker,apache,nagios,centreon,centreon-gorgone          |
| centreon-gorgone | centreon,apache,centreon-gorgone,centreon-engine,centreon-broker |
| rrdcached        | centreon-broker,apache                                           |

Description of groups and linked users for Centreon Business Edition:

| Group            | Users                                                                        |
|----------------- |------------------------------------------------------------------------------|
| apache           | nagios,centreonBI,centreon,centreon-gorgone                                  |
| centreon         | centreon-engine,centreon-broker,apache,rrdcached,centreonBI,centreon-gorgone |
| centreon-broker  | centreon,nagios,centreon-engine,apache,rrdcached,centreon-gorgone            |
| centreon-engine  | centreon-broker,apache,nagios,centreon,centreon-gorgone                      |
| centreon-gorgone | centreon,apache,centreon-gorgone,centreon-engine,centreon-broker             |
| centreonBI       | apache                                                                       |
| centreon-map     |                                                                              |
| mysql            | centreonBI                                                                   |

Description of users, umask and home directory for Centreon Open Source and IT Edition:

| User             | umask | home                      | Shell         |
|------------------|-------|---------------------------|---------------|
| root             | 0022  | /root                     | /bin/bash     |
| apache           | 0022  | /var/www                  | /sbin/nologin |
| centreon         | 0002  | /var/spool/centreon       | /bin/bash     |
| centreon-broker  | 0002  | /var/lib/centreon-broker  | /bin/bash     |
| centreon-engine  | 0002  | /var/lib/centreon-engine  | /bin/bash     |
| centreon-gorgone | 0002  | /var/lib/centreon-gorgone | /bin/bash     |
| mysql            | 0002  | /var/lib/mysql            | /sbin/nologin |
| rrdcached        | 0002  | /var/rrdtool/rrdcached    | /bin/bash     |

Description of users, umask and home directory for Centreon Business Edition:

| User             | umask | home                      | Shell         |
|------------------|-------|---------------------------|---------------|
| root             | 0022  | /root                     | /bin/bash     |
| apache           | 0022  | /var/www                  | /sbin/nologin |
| centreon         | 0002  | /var/spool/centreon       | /bin/bash     |
| centreonBI       | 0002  | /home/centreonBI          | /bin/bash     |
| centreon-agent   | 0002  | /var/lib/centreon-agent   | /bin/bash     |
| centreon-broker  | 0002  | /var/lib/centreon-broker  | /bin/bash     |
| centreon-engine  | 0002  | /var/lib/centreon-engine  | /bin/bash     |
| centreon-gorgone | 0002  | /var/lib/centreon-gorgone | /bin/bash     |
| centreon-map     | 0002  | /home/centreon-map        | /bin/bash     |
| mysql            | 0002  | /var/lib/mysql            | /sbin/nologin |
| rrdcached        | 0002  | /var/rrdtool/rrdcached    | /bin/bash     |

## Software dependencies

For your information, the following table describes the software dependencies. Everything comes prepackaged with Centreon; you do not need to install anything manually.

| Software | Version    |
| -------- | ---------- |
| Apache   | 2.4        |
| GnuTLS   | \>= 2.0    |
| Net-SNMP | 5.7        |
| openssl  | \>= 1.0.1k |
| PHP      | 8.1        |
| RRDtools | 1.4.7      |
| zlib     | 1.2.3      |

## Architectures

### Standalone central server

If you are not monitoring many hosts, you may only need one central server.

#### Components

The following components are used in a central server:

* Apache web server for the Centreon web interface
* MariaDB databases to store Centreon configuration parameters as well as monitoring and performance data
* A monitoring engine to collect data
* Collected data are sent to Centreon Broker SQL using cbmod by the monitoring engine
* Centreon Broker SQL stores information in MariaDB databases and forwards them to Centreon Broker RRD
* Centreon Broker RRD generates and updates RRD files with data in order to display performance graphs

#### Architecture

The diagram below summarizes how a central server works:

![image](../assets/architectures/Architecture_standalone.png)

### Distributed architecture

#### Description (Distributed)

The distributed architecture has the following elements:

* A central Centreon server to display information
* One or more remote servers and/or pollers to collect data

The central Centreon server includes the following items:

* Centreon web interface
* Databases (MariaDB + RRD)
* Monitoring Engine
* Broker

The Poller includes the following items:

* Monitoring Engine
* Broker module to forward collected data to a central broker

This architecture is used for:

* Enabling load balancing across multiple remote monitoring servers
* Network stream isolation: if your monitoring architecture has to monitor a DMZ area, it is easier (and safe) to place a remote server in the DMZ network

#### Components

##### Central Centreon server

Many components are used to build a central Centreon server:

* Apache web server for Centreon web interface
* MariaDB databases to store Centreon configuration parameters as well as monitoring and performance data
* The Centreon Gorgone process is used to send monitoring configuration parameters to the remote server and to manage it
* A monitoring engine to collect data
* Collected data are sent to Centreon Broker SQL using cbmod by a monitoring engine
* Centreon Broker SQL stores information in MariaDB databases and forwards them to Centreon Broker RRD
* Centreon Broker RRD generates and updates RRD files with data in order to display performance graphs

##### Poller

Many components are used to build a poller:

* A monitoring engine to collect data
* Collected data are sent to Centreon Broker SQL using cbmod by a monitoring engine

#### Architecture

The diagram below summarizes the architecture:

![image](../assets/architectures/Architecture_distributed.png)

### Remote DBMS

The distributed architecture with remote DBMS includes three types of entities:

* A central Centreon server to display information
* A DBMS server to store collected data
* One or more remote servers to collect data

The central Centreon server includes the following items:

* Centreon web interface
* Monitoring Engine
* Broker
* RRD files

The DBMS server stores information in MariaDB databases.

The poller includes the following items:

* Monitoring Engine
* Broker module to forward collected data to a central broker

This architecture is used for:

* Enabling load balancing across multiple remote monitoring servers
* Network stream isolation: if your monitoring architecture has to monitor a DMZ area, it is easier (and safe) to place a remote server in the DMZ network
* Providing a remote DBMS

#### Components

##### DBMS server

The DBMS server is used only to store Centreon configuration parameters as well as monitoring and performance data in MariaDB databases

##### Central Centreon server

Many components are used to build a central Centreon server:

* Apache web server for Centreon web interface
* The central Centreon server obtains configuration and collected data from the DBMS server
* The Centreon Gorgone process is used to send monitoring configuration parameters to the remote server and to manage it
* A monitoring engine to collect data
* Collected data are sent to Centreon Broker SQL using cbmod by the monitoring engine
* Centreon Broker SQL stores information in MariaDB databases and forwards them to Centreon Broker RRD
* Centreon Broker RRD generates and updates RRD files with data in order to display performance graphs

##### Poller

Many components are used to build a poller:

* A monitoring engine to collect data
* Collected data are sent to Centreon Broker SQL by the monitoring engine, using cbmod

#### Architecture

The diagram below summarizes the architecture:

![image](../assets/architectures/Architecture_distributed_dbms.png)

### Remote Server

The distributed architecture with Remote server includes three types of entities:

* A Centreon Central server to configure monitoring and to display and operate on collected data
* One or more Centreon Remote servers to display and operate on a subset of collected data
* One or more pollers to collect data

The central Centreon server includes the following items:

* Centreon web interface (configure, display and operate)
* Monitoring Engine
* Broker
* Databases (MariaDB + RRD)

The Remote servers include the following items:

* Centreon web interface (display & operate a subset of data)
* Monitoring Engine
* Databases (MariaDB + RRD)
* Broker module to forward collected data to a central broker

This architecture is used for:

* Enabling load balancing across multiple remote monitoring servers
* Network stream isolation: if your monitoring architecture has to monitor a DMZ area, it is easier (and safe) to place a remote server in the DMZ network
* Having a dedicated web interface to display and operate on a subset of data.

#### Components

##### Central Centreon server

Many components are used to build a Centreon server:

* Apache web server for Centreon web interface
* MariaDB databases to store Centreon configuration parameters as well as monitoring and performance data
* The Centreon Gorgone process is used to send monitoring configuration parameters to the remote server and to manage it
* A monitoring engine to collect data
* Collected data are sent to Centreon Broker SQL using cbmod by the monitoring engine
* Centreon Broker SQL stores information in MariaDB databases and forwards them to Centreon Broker RRD
* Centreon Broker RRD generates and updates RRD files with data in order to display performance graphs

##### Remote monitoring server

Many components are used to build a remote server:

* Apache web server for Centreon web interface
* MariaDB databases to store monitoring and performance data
* The Centreon Gorgone process is used to operate on collected data
* A monitoring engine to collect data
* Collected data are sent to Centreon Broker SQL using cbmod by a monitoring engine
* Centreon Broker SQL stores information in MariaDB databases and forwards them to Centreon Broker RRD locally. All information is forwarded to the Centreon central server.
* Centreon Broker RRD generates and updates RRD files with data in order to display performance graphs

##### Poller

Many components are used to build a poller:

* A monitoring engine to collect data
* Collected data are sent to Centreon Broker SQL by the monitoring engine, using cbmod 

#### Architecture

The diagram below summarizes the architecture:

![image](../assets/architectures/Architecture_distributed_remote.png)

---
id: applications-webservers-tomcat-webmanager
title: Tomcat Webmanager
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Webservers-Tomcat-Webmanager
```

## Install Tomcat

Warning: The following procedure is an example. Cannot be applied on all
context.

This chapter describes the prerequisites installation needed by plugins to run.
Prerequistes concerns a RHEL6 like distribution.

Install tomcat:

    yum install tomcat6 tomcat6-webapps tomcat6-admin-webapps

Tomcat must be restarted:

    # service tomcat6 restart

### Permissions

You need to configure an account with the manage role.

Add in */usr/share/tomcat6/conf/tomcat-users.xml* file:

    <user name="tomcat" password="tomcatpass" roles="manager" />
    </tomcat-users>

Tomcat must be restarted:

    # service tomcat6 restart

## Centreon configuration

### Create an Centreon Map server

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                                |
| :---------------------- | :----------------------------------- |
| Host name               | *Name of the host*                   |
| Alias                   | *Host description*                   |
| IP                      | *Host IP Address*                    |
| Monitored from          | *Monitoring Poller to use*           |
| Host Multiple Templates | *App-Webserver-Tomcat6|7-Webmanager* |

Click the *Save* button.

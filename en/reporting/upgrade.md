---
id: upgrade
title: Upgrade the extension
---

> When updating from version < 18.10 to a version >= 18.10, you need to
>
> - Retrieve a new license from Centreon support
> - Make sure your Centreon MBI server is based on CentOS/RH 7. You may use the
>   following procedure to migrate your server: [Migrate your
>   reporting server](migrate.html)

The upgrade of Centreon MBI is made of 3 steps :

- Updating the repository
- Updating the extension interface
- Updating the reporting server

## Update the repostory

When you upgrade from a minor to another minor (i.e 19.10.x to 20.04.x ) you first need to update the repository on 
your Central & reporting servers.

Execute the following command to install the new repository:

    yum update $(IFS=$'\n' BASE=( $(sed -n 's/baseurl=\(.*\/stable\/noarch\)/\1/p' /etc/yum.repos.d/centreon-mbi.repo) ) ; echo "${BASE[0]/19.10/20.04}RPMS/centreon-mbi-release-20.04-1.el7.centos.noarch.rpm")

*You may need to update 19.10 if you're not currently in this version*

## Upgrade the extension interface

1. Update the package, run the following commands:

        yum update centreon-bi-server

2. Update through the interface:  Log on to the Centreon web interface and go to 
the *Administration > Extension > Manager* page and click on the 
AirUpdate button to update the extension and the widgets

## Upgrade the reporting server 

Connect to your reporting server and stop the scheduler service (CBIS):

    systemctl stop cbis

Then run the following commands: :

    yum clean all
    yum update centreon-bi\*

Start the scheduler service: 

    systemctl start cbis

You're done :)
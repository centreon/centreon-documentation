---
id: update
title: Update the extension
---

The update of Centreon MBI is made of 2 steps :

-   Updating the extension interface
-   Updating the reporting server

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
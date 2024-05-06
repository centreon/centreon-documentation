---
id: ha-faq
title: Centreon HA general FAQ
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## When do I need HA?

HA is relevant when it is critical for your Centreon platform to be up without interruption - because the resources you are monitoring must be functional at all times.

Centreon HA is an active-passive cluster. It does not perform load balancing.

## Can I implement HA myself?

Your HA must be installed by Centreon Professional Services.

## Do I need a licence for Centreon HA?

Extensions need specific license files to work on both nodes smoothly. If you have an IT or Business subscription, please get in touch with your Centreon sales representative or Technical Account Manager.

## What is supported, and what isn't?

With Centreon 24.04, HA clusters are supported on Alma/RHEL/Oracle Linux 8 and 9 and Debian 11, and the only supported DBMS is MariaDB 10.11. Debian 12 and MySQL8 are not supported yet: if you need to use them, please contact your Centreon sales representative.

Support for HA setups is not included in the Centreon standard support. If you want support for your HA system, your HA setup must be installed by Centreon Professional Services, and you need to purchase a specific HA support pack.

## What modules can I set up HA on?

HA can be set up on:

* Your central servers (that includes BAM automatically).
* A Centreon MAP server: please contact your Centreon sales representative if you want to implement this.
* It is unnecessary to set up redundancy on an MBI server as all of MBI's data is already present on the database connected to the central server.

HA is not supported on pollers.

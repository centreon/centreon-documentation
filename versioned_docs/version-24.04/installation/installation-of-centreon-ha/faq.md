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

It is strongly recommended that your HA is installed by Centreon Professional Services. You may implement HA yourself **only** if:

* you are able to set up replicated databases with a dedicated VIP. The [installation procedure described in this documentation](installation.md) only applies if you already have a database cluster.
* you have a strong knowledge of the Pacemaker-Corosync clustering tools, of networks, of Linux OS and of Centreon, in order to have a proper understanding of what is being done and to be able to correct any mistakes that might occur.

> **WARNING:** Anyone following the installation procedure does so at their own risk. Under no circumstances shall Centreon be liable for any breakdown or loss of data.

## Do I need a licence for Centreon HA?

Extensions need specific license files to work on both nodes smoothly. If you have an IT or Business subscription, please get in touch with your Centreon sales representative or Technical Account Manager before implementing high availability.

## What is supported, and what isn't?

With Centreon 24.04, HA clusters are supported on Alma/RHEL/Oracle Linux 8 and 9 and Debian 11, and the only supported DBMS is MariaDB 10.11. Debian 12 and MySQL8 are not supported yet: if you need to use them, please contact your Centreon sales representative.

Support for HA setups is not included in the Centreon standard support. If you want support for your HA system, your HA setup must be installed by Centreon Professional Services, and you need to purchase a specific HA support pack. Moreover, Centreon can only support Centreon software and does not offer support on your database redundancy setup.

From version 24.04 on, you need a remote database in all cases. The redundancy of the database is the responsibility of the customer. MariaDB and MySQL have their own redundancy system: set up a database redundancy system using the tools provided by MariaDB or MySQL.

## What modules can I set up HA on?

HA can be set up on:

* Your central servers (that includes BAM automatically).
* A Centreon MAP server: please contact your Centreon sales representative if you want to implement this.
* It is unnecessary to set up redundancy on an MBI server as all of MBI's data is already present on the database connected to the central server.

HA is not supported on pollers.

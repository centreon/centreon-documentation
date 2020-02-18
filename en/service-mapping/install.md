---
id: install
title: Install the extension
---

> Centreon BAM is a Centreon **extension** that requires a valid license key. To
> purchase one and retrieve the necessary repositories, contact
> [Centreon](sales@centreon.com).

## Prerequisites

The required version of Centreon software for compatibility with Centreon MAP is
**Centreon 20.04**

## Installation

### Install the package

Add the Centreon BAM repository provided by Centreon on the Central server and
install the package using the following command:

    yum install centreon-bam-server

### Upload the license

A license file *bam.license* is provided by Centreon. Go to `Administration >
Extensions > Manager` and upload the license using the interface.

### Install the interface

Log on to the Centreon web interface using an account with privileges sufficient
to install extension. Then go to the `Administration > Extension > Manager`

> If you are using MySQL replication for your monitoring databases, installing
> Centreon BAM generates a view. You need to exclude it from replication by
> adding the following line on the my.cnf file of the slave server:
>
>     replicate-ignore-table=centreon.mod_bam_view_kpi
> Create the view manually on the slave server by executing the following
> command line:
>
>     mysql centreon < view_creation.sql

## Centreon Broker

A Centreon BAM installation or upgrade automatically creates Centreon Broker
outputs. In the **extra-rare case** you need to have a look / re-create them,
you can find below usefull information about Centreon BAM's Broker
configuration.

> This documentation does not describe the standard configuration of Centreon
> Broker.

The Centreon Broker configuration required for Centreon BAM consists of two
parts:

  - **centreon-bam-monitoring** (BAM-Monitoring engine (BAM)-type): Allows all
    Business Activities status changes to be added to the database.
  - **centreon-bam-reporting** (BAM-BI engine (BAM)-type): Allows availability
    data to be added to the database.

### Real-time Centreon Broker output

> This output is added to Centreon Broker central server instance.

Go to the following page `Configuration > Centreon > Centreon-Broker >
Configuration`, under the **Output** tab.

Check that the following configuration is correctly set:

![image](assets/service-mapping/guide//conf_central_bam_monitoring.png)

### Configuring the Reporting Output

> This output will be added to the Centreon Broker central server instance.

Go to the following page `Configuration > Centreon > Centreon-Broker >
Configuration`, under the **Output** tab.

Check that the following configuration is correctly set:

![image](assets/service-mapping/guide//conf_central_bam_reporting.png)

---
id: install
title: Install Centreon BAM extension
---

> Centreon BAM is a Centreon **extension** that requires a valid license key. To
> purchase one, contact
> [Centreon](mailto:sales@centreon.com).

## Prerequisites

The required version of Centreon software for compatibility with Centreon BAM
is **Centreon 20.10**.

## Installation

### Install the package

Add the Centreon BAM repository provided by Centreon on the Central server. To install it, run the following command:

``` shell
yum install https://yum.centreon.com/centreon-bam/d4e1d7d3e888f596674453d1f20ff6d3/20.10/el7/stable/noarch/RPMS/centreon-bam-release-20.10-2.el7.centos.noarch.rpm
```

And install the package using the following command:

``` shell
yum install centreon-bam-server
```

### Upload the license

A license file *bam.license* is provided by Centreon. Go to
`Administration > Extensions > Manager` and upload the license
using the interface.

### Install the interface

Log on to the Centreon web interface using an account with privileges
sufficient to install extension. Then go to the
`Administration > Extension > Manager`

> If you are using MariaDB replication for your monitoring databases,
> installing Centreon BAM generates a view. You need to exclude it from
> replication by adding the following line on the my.cnf file of the
> slave server:
>
> ``` text
> replicate-ignore-table=centreon.mod_bam_view_kpi
> ```
>
> Create the view manually on the slave server by executing the
> following command line:
>
> ``` shell
> mysql centreon < view_creation.sql
> ```

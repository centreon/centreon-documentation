---
id: nagios-to-centreon
title: Nagios Reader to Centreon CLAPI
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


**Nagios Reader to Centreon CLAPI** is a free and open source project to analyze
Nagios CFG configuration files and to transform a monitoring configuration to
a Centreon CLAPI command in order to import a configuration into the Centreon web
interface.

## Prerequisites

First of all, you need a Centreon server installed and ready to use. Please see
the documentation [to install a Centreon server](../installation/installation-of-a-central-server/using-packages.md).

## Installation

This script uses the Perl-Nagios-Object library to read CFG files. To install it,
please follow these steps on your Nagios(R) server:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install perl-Module-Build
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install perl-Module-Build
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```shell
apt-get install libmodule-build-perl
```

</TabItem>
</Tabs>

```shell
cd /tmp
wget http://search.cpan.org/CPAN/authors/id/D/DU/DUNCS/Nagios-Object-0.21.20.tar.gz
tar xzf Nagios-Object-0.21.20.tar.gz
cd Nagios-Object-0.21.20
perl Build.PL
./Build
./Build test
./Build install
```

Download script from GitHub on your Nagios(R) server:

```shell
cd /tmp
git clone https://github.com/centreon/nagiosToCentreon.git
cd nagiosToCentreon
```

## Usage

On a fresh Centreon server,the default poller is named "Central". If you rename
it or if you want to link this Nagios configuration to a predefined poller, you
must change the poller name on line 65:

```perl
my $default_poller = "Central";
```

To display help use the following command:

```shell
$ perl nagios_reader_to_centreon_clapi.pl --help
######################################################
#    Copyright (c) 2005-2015 Centreon                #
#    Bugs to http://github.com/nagiosToCentreon      #
######################################################

Usage: nagios_reader_to_centreon_clapi.pl
    -V (--version) Show script version
    -h (--help)    Usage help
    -C (--config)  Path to nagios.cfg file
```

To run the script, please use the following command:

```shell
perl nagios_reader_to_centreon_clapi.pl --config /usr/local/nagios/etc/ > /tmp/centreon_clapi_import_commands.txt
```

Export the file /tmp/centreon\_clapi\_import\_commands.txt on your Centreon
server.

Run the following command to import the configuration into Centreon on your Centreon
server:

```shell
/usr/share/centreon/bin/centreon -u admin -p <PASSWORD> -i /tmp/centreon_clapi_import_commands.txt
```

Replace **<PASSWORD\>** with the password of the **admin** Centreon web user.

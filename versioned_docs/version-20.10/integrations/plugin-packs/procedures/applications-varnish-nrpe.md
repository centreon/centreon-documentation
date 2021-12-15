---
id: applications-varnish-nrpe
title: Varnish NRPE
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

The Plugin Pack *Varnish* works with the NRPE monitoring agent on Linux to check
the performance and behavior of a Varnish HTTP Cache Server.

## Pack assets

### Monitored objects

* Varnish Cache statistics

### Collected metrics

*Coming soon*

## Prerequisites

### Command-line utility

The Plugin uses the *varnishstat* binary.

### NRPE Server

On RPM-Based distribution, you can use the centreon-nrpe3-daemon package deploying
a preconfigured version of the NRPE Server.

Most of the Linux distributions provide a NRPE package you can deploy using the system
package default manager. When using these, it's important to modify following directives
in the config files:

* `allowed_hosts`

```shell
[...]
# ALLOWED HOST ADDRESSES
# This is an optional comma-delimited list of IP address or hostnames
# that are allowed to talk to the NRPE daemon. Network addresses with a bit mask
# (i.e. 192.168.1.0/24) are also supported. Hostname wildcards are not currently
# supported.
allowed_hosts=X.X.X.X,X.Y.Z.V
[...]
```

* `dont_blame_nrpe`

```shell
[...]
# ALLOWED HOST ADDRESSES
# This is an optional comma-delimited list of IP address or hostnames
# that are allowed to talk to the NRPE daemon. Network addresses with a bit mask
# (i.e. 192.168.1.0/24) are also supported. Hostname wildcards are not currently
# supported.
dont_blame_nrpe=1
[...]
```

**Important note: the `NASTY_METACHARS` parameter should be left as its default value.
Modifying it might open serious security hole and RCE exploitation from an attacker.**

## Installation

<Tabs groupId="operating-systems">
<TabItem value="Online IMP Licence & IT-100 Editions" label="Online IMP Licence & IT-100 Editions">

1. Install the Centreon NRPE Client package on every Poller expected to monitor *Varnish*:

```bash
yum install centreon-nrpe3-plugin
```

2. On the Centreon Web interface, install the Centreon Pack *Varnish*
from the **Configuration > Plugin Packs > Manager** page

</TabItem>
<TabItem value="offline" label="Offline License">

1. Install the Centreon Plugin package on every Poller expected to monitor *Varnish*:

```bash
yum install centreon-nrpe-plugin
```

2. Install the Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-varnish-nrpe
```

3. On the Centreon Web interface, install the Centreon Pack *Varnish*
from the **Configuration > Plugin Packs > Manager** page

</TabItem>
</Tabs>

## Host configuration

* Log into Centreon and add a new Host through "Configuration > Hosts".
* Apply the *App-Varnish-NRPE-custom* template and configure all the mandatory Macros:

| Mandatory | Name             | Description                                                      |
| :-------- | :--------------- | :--------------------------------------------------------------- |
| X         | NRPECLIENT       | NRPE Plugin binary to use (Default: 'check_centreon_nrpe')       |
| X         | NRPEPORT         | NRPE Port of the target server (Default: '5666')                 |
| X         | NRPETIMEOUT      | Timeout value (Default: '30')                                    |
| X         | NRPEEXTRAOPTIONS | Extraoptions to use with the NRPE binary (default: '-u -m 8192') |
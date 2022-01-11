---
id: hardware-storage-emc-symmetrix-nsclient-05-restapi
title: EMC Symmetrix NRPE
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


> Hello community! We're looking for a contributor to help us to translate the
> content in french and provide a sample execution command. If it's you, let us
> know and ping us on [slack](https://centreon.slack.com)

## Overview

The Pack _EMC Symmetrix_ works with the Centreon NSClient++ monitoring
agent and offer controls to monitor hardware components of EMC Storage arrays.

## Pack assets

### Monitored objects

- EMC Storage arrays, including following platforms:
  - DMX
  - Vmax

### Collected metrics

_Coming soon_

## Prerequisites

### NSClient++

To monitor _EMC Symmetrix_ disk controllers through NRPE, install the Centreon packaged version
of the NSClient++ agent. Please follow our [official documentation](../tutorials/centreon-nsclient-tutorial)
and make sure that the **NRPE Server** configuration is correct.

## Installation

<Tabs groupId="sync">
<TabItem value="Online IMP Licence & IT100 Editions" label="Online IMP Licence & IT100 Editions">

1. Install the Centreon NRPE Client package on every Poller expected to monitor _EMC Symmetrix_:

```bash
yum install centreon-nrpe-plugin
```

2. On the Centreon Web interface, install the Centreon Pack _Veeam_
   from the **Configuration > Plugin Packs > Manager** page

</TabItem>
<TabItem value="Offline IMP License" label="Offline IMP License">

1. Install the Centreon Plugin package on every Poller expected to monitor _EMC Symmetrix_:

```bash
yum install centreon-nrpe-plugin
```

2. Install the Centreon Pack RPM on the Central server:

```bash
yum install centreon-pack-hardware-storage-emc-symmetrix
```

3. On the Centreon Web interface, install the Centreon Pack _EMC Symmetrix_
   from the **Configuration > Plugin Packs > Manager** page

</TabItem>
</Tabs>

## Host configuration

- Log into Centreon and add a new Host through **Configuration > Hosts**.
- Apply the _HW-Storage-EMC-Symmetrix-Dmx34-NRPE_ or _HW-Storage-EMC-Symmetrix-Vmax-NRPE_
  template and configure all the mandatory Macros:

| Mandatory | Name             | Description                                                      |
| :-------- | :--------------- | :--------------------------------------------------------------- |
| X         | NRPECLIENT       | NRPE Plugin binary to use (Default: 'check_centreon_nrpe')       |
| X         | NRPEPORT         | NRPE Port of the target server (Default: '5666')                 |
| X         | NRPETIMEOUT      | Timeout value (Default: '30')                                    |
| X         | NRPEEXTRAOPTIONS | Extraoptions to use with the NRPE binary (default: '-u -m 8192') |

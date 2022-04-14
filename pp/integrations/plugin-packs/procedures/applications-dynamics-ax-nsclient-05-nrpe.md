---
id: applications-dynamics-ax-nsclient-05-nrpe
title: Microsoft Dynamics NRPE 0.5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

This Plugin Pack allows you to get metrics and statuses collected thanks to the NSClient++
monitoring agent and its embedded NRPE Server.

## Pack assets

### Monitored objects

* Windows Server OS from 2003 SP2 version
* Windows Workstation from XP version

### Collected metrics

<Tabs groupId="sync">
<TabItem value="Service-RIS" label="Service-RIS">

| Service name | Description                                                |
| :----------- | :--------------------------------------------------------- |
| Service-RIS  | Check state of the RecurringIntegrationsScheduler service. |

</TabItem>
<TabItem value="RIS-Import-ProcessingErrors" label="RIS-Import-ProcessingErrors">

| Service name                | Description                      |
| :-------------------------- | :------------------------------- |
| RIS-Import-ProcessingErrors | Check files importation failure. |

</TabItem>
<TabItem value="RIS-Import-Input" label="RIS-Import-Input">

| Service name     | Description                  |
| :--------------- | :--------------------------- |
| RIS-Import-Input | Check import files presence. |

</TabItem>
</Tabs>

## Prerequisites

### Centreon NSClient++

To monitor **Dynamics AX** through NRPE, install the Centreon packaged version of the NSClient++ agent.
Please follow our [official documentation](../getting-started/how-to-guides/centreon-nsclient-tutorial.md)
and make sure that the **NRPE Server** configuration is correct.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon NRPE Client package on every poller:

```bash
yum install centreon-nrpe3-plugin
```

2. On the Centreon web interface, install the Centreon Pack **Dynamics NSClient**
from the **Configuration > Plugin Packs > Manager** page.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin package on every poller:

```bash
yum install centreon-nrpe3-plugin
```

2. Install the Centreon Pack RPM on the Centreon central server:

```bash
yum install centreon-pack-operatingsystems-windows-nsclient-05-nrpe applications-dynamics-ax-nsclient-05-nrpe
```

3. On the Centreon web interface, install the Centreon Pack **Dynamics NSClient**
from the **Configuration > Plugin Packs > Manager** page.

</TabItem>
</Tabs>

## Host configuration

* Log into Centreon and add a new host through **Configuration > Hosts > Hosts**.
* Apply the **App-Dynamics-AX-NRPE-custom** template and configure all the mandatory macros:

| Mandatory | Name             | Description                                                         |
|:----------|:-----------------|:------------------------------------------------------------------- |
| X         | NRPECLIENT       | NRPE Plugin binary to use (Default: 'check_centreon_nrpe3')         |
| X         | NRPEPORT         | NRPE Port of the target server (Default: '5666')                    |
| X         | NRPETIMEOUT      | Timeout value (Default: '30')                                       |
| X         | NRPEEXTRAOPTIONS | Extraoptions to use with the NRPE binary (default: '-2 -u -P 8192') |
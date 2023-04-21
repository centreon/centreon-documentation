---
id: sc-hp-omi
title: HP OMI
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## How it works

HP OMI stream connector sends events related data to HP OMI

## Compatibility

**to be determined**

### Installation

Login as `root` on the Centreon central server using your favorite SSH client.

Run the command according on your system:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install centreon-stream-connector-omi
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install centreon-stream-connector-omi
```

</TabItem>

<TabItem value="Debian 11" label="Debian_11">

```shell
apt install centreon-stream-connector-omi
```

</TabItem>
</Tabs>

## Requirements and configuration

This stream connector needs the following configuration:

| Filter category |
| --------------- |
| Neb             |

| Path                                              |
| ------------------------------------------------- |
| /usr/share/centreon-broker/lua/omi\_connector.lua |

| Parameter | type   | Example of value                            |
| --------- | ------ | ------------------------------------------- |
| logfile   | string | /var/log/centreon-broker/omi\_connector.log |
| ipaddr    | string | 192.168.0.6                                 |
| loglevel  | number | 2                                           |
| port      | number | 30005                                       |
| max\_size | number | 5                                           |
| max\_age  | number | 60                                          |

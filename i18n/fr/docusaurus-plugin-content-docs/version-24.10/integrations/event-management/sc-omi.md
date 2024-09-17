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

Se connecter en tant que `root` au serveur central Centreon avec votre client SSH favori.

Lancer la commande adaptée à votre système :

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

<TabItem value="Debian 12" label="Debian 12">

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

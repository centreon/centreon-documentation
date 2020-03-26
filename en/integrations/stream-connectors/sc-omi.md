---
id: hp-omi
title: HP OMI
---

## How it works

HP OMI stream connector sends events related data to HP OMI

![architecture](../../../assets/integrations/stream-connectors/sc-omi-architecture.png)

## Compatibility

**to be determined**

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

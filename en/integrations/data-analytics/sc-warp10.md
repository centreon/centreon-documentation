---
id: sc-warp10
title: Warp10
---

## How it works

Warp10 stream connector sends data to Warp10 using centreon neb events as a
source

![architecture](../../assets/integrations/stream-connectors/sc-warp10-architecture.png)

## Compatibility

**to be determined**

## Requirements and configuration

This stream connector needs the following configuration:

| Filter category |
| --------------- |
| Neb             |

| Path                                             |
| ------------------------------------------------ |
| /usr/share/centreon-broker/lua/export-warp10.lua |

| Parameter | type   | Example of value |
| --------- | ------ | ---------------- |
| logfile   | string | mylogfile.log    |
| ipaddr    | string | 192.168.0.6      |
| port      | number | yyyyy            |
| token     | string | xxxxxxxxxxxxxxx  |
| max\_size | number | 100              |

you also need to install lua-curl library on your centreon central server
`luarocks install lua-curl`

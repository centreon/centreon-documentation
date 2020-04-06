---
id: ndo
title: NDO
---

## How it works

NDO stream connector emulates the NDO protocol that is no longer used by
Centreon in favor of BBDO.

![architecture](assets/integrations/stream-connectors/sc-ndo-architecture.png)

## Compatibility

**to be determined**

## Requirements and configuration

This stream connector needs the following configuration:

| Path                                                  |
| ----------------------------------------------------- |
| /usr/share/centreon-broker/lua/splunk-states-http.lua |

| Parameter | type   | Example of value |
| --------- | ------ | ---------------- |
| port      | number | yyyyy            |
| ipaddr    | string | 192.168.0.6      |
| max\_row  | number | 100              |

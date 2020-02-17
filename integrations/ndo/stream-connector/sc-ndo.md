# NDO stream connector

## Table of contents
1. [How it works](#how-it-works)
2. [Compatibility](#compatibility)
3. [Requirements and configuration](#requirements-and-configuration)
4. [Additional informations](#dditional-informations)

## How it works <a name="how-it-works"></a>
NDO stream connector emulates the NDO protocol that is no longer used by Centreon in favor of BBDO.

![architecture](img/sc-splunk-states-architecture.png)

## Compatibility <a name="compatibility"></a>

**to be determined**

## Requirements and configuration <a name="requirement-and-configuration"></a>
This stream connector needs the following configuration:

| Path |
| ---- |
| /usr/share/centreon-broker/lua/splunk-states-http.lua |

| Parameter | type | Example of value |
| --------- | ---- | ---------------- |
| port | number | yyyyy |
| ipaddr | string | 192.168.0.6 |
| max_row | number | 100 |

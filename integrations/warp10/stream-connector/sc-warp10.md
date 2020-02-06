# Warp10 stream connector

## Table of contents
1. [How it works](#how-it-works)
2. [Compatibility](#compatibility)
3. [Requirements and configuration](#requirements-and-configuration)
4. [Additional informations](#dditional-informations)

## How it works <a name="how-it-works"></a>
Warp10 stream connector sends data to Warp10 using centreon neb events as a source

![architecture](img/sc-warp10-architecture.png)

## Compatibility <a name="compatibility"></a>

**to be determined**

## Requirements and configuration <a name="requirement-and-configuration"></a>
This stream connector needs the following configuration:

| Filter category |
| --------------- |
| Neb |

| Path |
| ---- |
| /usr/share/centreon-broker/lua/export-warp10.lua |

| Parameter | type | Example of value |
| --------- | ---- | ---------------- |
| logfile | string | mylogfile.log |
| ipaddr | string | 192.168.0.6 |
| port | number | yyyyy |
| token | string | xxxxxxxxxxxxxxx |
| max_size | number | 100 |

you also need to install lua-curl library on your centreon central server
`luarocks install lua-curl`

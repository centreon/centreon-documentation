# HP OMI stream connector

## Table of contents
1. [How it works](#how-it-works)
2. [Compatibility](#compatibility)
3. [Requirements and configuration](#requirements-and-configuration)
4. [Additional informations](#dditional-informations)

## How it works <a name="how-it-works"></a>
HP OMI stream connector sends events related data to HP OMI

![architecture](img/sc-omi-architecture.png)

## Compatibility <a name="compatibility"></a>

**to be determined**

## Requirements and configuration <a name="requirement-and-configuration"></a>
This stream connector needs the following configuration:

| Filter category |
| --------------- |
| Neb |

| Path |
| ---- |
| /usr/share/centreon-broker/lua/omi_connector.lua |

| Parameter | type | Example of value |
| --------- | ---- | ---------------- |
| logfile | string | /var/log/centreon-broker/omi_connector.log |
| ipaddr | string | 192.168.0.6 |
| loglevel | number | 2 |
| port | number | 30005 |
| max_size | number | 5 |
| max_age | number | 60 |

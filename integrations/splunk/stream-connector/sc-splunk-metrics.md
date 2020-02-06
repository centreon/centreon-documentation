# Splunk metrics stream connector

## Table of contents
1. [How it works](#how-it-works)
2. [Compatibility](#compatibility)
3. [Requirements and configuration](#requirements-and-configuration)
4. [Additional informations](#dditional-informations)

## How it works <a name="how-it-works"></a>
Splunk metrics stream connector sends metric related data to Splunk

![architecture](img/sc-splunk-metrics-architecture.png)

## Compatibility <a name="compatibility"></a>

**to be determined**

## Requirements and configuration <a name="requirement-and-configuration"></a>
This stream connector needs the following configuration:

| Filter category |
| --------------- |
| Storage |

| Path |
| ---- |
| /usr/share/centreon-broker/lua/splunk-metrics-http.lua |

| Parameter | type | Example of value |
| --------- | ---- | ---------------- |
| splunk_sourcename | string | http:centreon_metrics |
| receiver_address | string | 192.168.0.6 |
| splunk_sourcetype | string | _json |
| splunk_auth_var | string | xxxxxxxxxxxxxxx |

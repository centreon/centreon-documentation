---
id: splunk-metrics
title: Splunk metrics
---

## How it works

Splunk metrics stream connector sends metric related data to Splunk

![architecture](../../../assets/integrations/stream-connectors/sc-splunk-metrics-architecture.png)

## Compatibility

**to be determined**

## Requirements and configuration

This stream connector needs the following configuration:

| Filter category |
| --------------- |
| Storage         |

| Path                                                   |
| ------------------------------------------------------ |
| /usr/share/centreon-broker/lua/splunk-metrics-http.lua |

| Parameter          | type   | Example of value       |
| ------------------ | ------ | ---------------------- |
| splunk\_sourcename | string | http:centreon\_metrics |
| receiver\_address  | string | 192.168.0.6            |
| splunk\_sourcetype | string | \_json                 |
| splunk\_auth\_var  | string | xxxxxxxxxxxxxxx        |

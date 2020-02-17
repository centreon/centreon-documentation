---
id: splunk-states
title: Splunk states
---

## How it works

Splunk states stream connector sends states related data to Splunk

![architecture](assets/integrations/stream-connectors/sc-splunk-states-architecture.png)

## Compatibility

**to be determined**

## Requirements and configuration

This stream connector needs the following configuration:

| Filter category |
| --------------- |
| Storage         |

| Path                                                  |
| ----------------------------------------------------- |
| /usr/share/centreon-broker/lua/splunk-states-http.lua |

| Parameter          | type   | Example of value       |
| ------------------ | ------ | ---------------------- |
| splunk\_sourcename | string | http:centreon\_metrics |
| receiver\_address  | string | 192.168.0.6            |
| splunk\_sourcetype | string | \_json                 |
| splunk\_auth\_var  | string | xxxxxxxxxxxxxxx        |

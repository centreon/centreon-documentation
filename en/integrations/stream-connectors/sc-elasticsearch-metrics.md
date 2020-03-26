---
id: elasticsearch-metrics
title: Elasticsearch metrics
---

## How it works

Elasticsearch metrics stream connector sends metrics related data to
Elasticsearch

![architecture](../../../assets/integrations/stream-connectors/sc-elasticsearch-metrics-architecture.png)

## Compatibility

**to be determined**

## Requirements and configuration

This stream connecters needs the following configuration:

| Parameter       | type   | Example of value |
| --------------- | ------ | ---------------- |
| log-file        | string | mylogfile.log    |
| elastic-address | string | 192.168.0.2      |
| elastic-port    | number | 9200             |
| max-row         | number | 100              |

# Elasticsearch metrics stream connector

## Table of contents
1. [How it works](#how-it-works)
2. [Compatibility](#compatibility)
3. [Requirements and configuration](#requirements-and-configuration)
4. [Additional informations](#dditional-informations)

## How it works <a name="how-it-works"></a>
Elasticsearch metrics stream connector sends metrics related data to Elasticsearch

![architecture](img/sc-elasticsearch-metrics-architecture.png)

## Compatibility <a name="compatibility"></a>

**to be determined**

## Requirements and configuration <a name="requirement-and-configuration"></a>
This stream connecters needs the following configuration:

| Parameter | type | Example of value |
| --------- | ---- | ---------------- |
| log-file | string | mylogfile.log |
| elastic-address | string | 192.168.0.2 |
| elastic-port | number | 9200 |
| max-row | number | 100 |

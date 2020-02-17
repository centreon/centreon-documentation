# Elasticsearch events stream connector

## Table of contents
1. [How it works](#how-it-works)
2. [Compatibility](#compatibility)
3. [Requirements and configuration](#requirements-and-configuration)
4. [Additional informations](#dditional-informations)

## How it works <a name="how-it-works"></a>
Elasticsearch events stream connector sends events related data to Elasticsearch

![architecture](img/sc-elasticsearch-events-architecture.png)

## Compatibility <a name="compatibility"></a>

**to be determined**

## Requirements and configuration <a name="requirement-and-configuration"></a>
This stream connecters needs the following configuration:

| Parameter | type | Example of value |
| --------- | ---- | ---------------- |
| log_path | string | /var/log/centreon-broker/stream-connector-elastic-neb.log |
| http_server_address | string | 192.168.0.3 |
| http_server_port | number | 9200 |
| http_server_protocol | string | https |
| http_timeout | number | 60 |
| max_buffer_size | number | 5000 |
| filter_type | string | metrics,status |
| elastic_index_metric | string | centreon_metric |
| elastic_index_status | string | centreon_status |
| elastic_username | string | myUser |
| elastic_password | password | MyPassword |
| max_buffer_age | number | 30 |
| skip_anon_events | number | 1 |
| log_level | number | 3 |

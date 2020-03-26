---
id: elasticsearch-events
title: Elasticsearch events
---

## How it works

Elasticsearch events stream connector sends events related data to Elasticsearch

![architecture](../../../assets/integrations/stream-connectors/sc-elasticsearch-events-architecture.png)

## Compatibility

**to be determined**

## Requirements and configuration

This stream connecters needs the following configuration:

| Parameter              | type     | Example of value                                          |
| ---------------------- | -------- | --------------------------------------------------------- |
| log\_path              | string   | /var/log/centreon-broker/stream-connector-elastic-neb.log |
| http\_server\_address  | string   | 192.168.0.3                                               |
| http\_server\_port     | number   | 9200                                                      |
| http\_server\_protocol | string   | https                                                     |
| http\_timeout          | number   | 60                                                        |
| max\_buffer\_size      | number   | 5000                                                      |
| filter\_type           | string   | metrics,status                                            |
| elastic\_index\_metric | string   | centreon\_metric                                          |
| elastic\_index\_status | string   | centreon\_status                                          |
| elastic\_username      | string   | myUser                                                    |
| elastic\_password      | password | MyPassword                                                |
| max\_buffer\_age       | number   | 30                                                        |
| skip\_anon\_events     | number   | 1                                                         |
| log\_level             | number   | 3                                                         |

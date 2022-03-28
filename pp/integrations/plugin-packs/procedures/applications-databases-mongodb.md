---
id: applications-databases-mongodb
title: MongoDB
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Databases-Mongodb
```

## Centreon Configuration

### Create a new server postgresql

Go to "Configuration \> Hosts" and click "Add". Then, fill the form as shown by
the following table :

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | App-DB-Mongodb-custom      |

Click "Save" button.

### Host Macro Configuration

The following macros must be configured on host:

| Macro           | Description                                  | Default value |
| :-------------- | :------------------------------------------- | :------------ |
| MONGODBPORT     | Port used to connect to the MongoDB instance | 27017         |
| MONGODBUSERNAME | The MongoDB username                         |               |
| MONGODBPASSWORD | The MongoDB password                         |               |

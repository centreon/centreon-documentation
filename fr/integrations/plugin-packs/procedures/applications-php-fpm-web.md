---
id: applications-php-fpm-web
title: PHP FPM
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.2 | `STABLE` | Aug  7 2017 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Php-Fpm-Web
```

You need a read access to the PHP FPM Webpage.

## Centreon Configuration

### Create a new PHP FPM module

Go to "Configuration \> Hosts" and click "Add". Then, fill the form as shown by
the following table :

| Field                                   | Value                      |
| :-------------------------------------- | :------------------------- |
| Host name                               | *Name of the host*         |
| Alias                                   | *Host description*         |
| IP                                      | *Host IP Address*          |
| Monitored from                          | *Monitoring Poller to use* |
| Host Multiple Templates                 | App-Php-Fpm-Web-custom     |

Click "Save" button.


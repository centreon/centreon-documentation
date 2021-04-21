---
id: applications-ansible-tower
title: Ansible Tower
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Ansible-Tower
```

### Tower CLI

To interact with the Ansible Tower instance, the plugin uses the Tower CLI.

Install it using the official documentation from [here](https://docs.ansible.com/ansible-tower/latest/html/towercli/usage.html#installation). 

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | App-Ansible-Tower-custom   |

Click on the *Save* button.

---
id: virtualization-proxmox-ve-restapi
title: Proxmox VE
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | Jan 10 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Virtualization-Proxmox-Ve-Restapi
```

## RestAPI Configuration

API user need to have this privileges:

    # VM.Monitor, VM.Audit, Datastore.Audit, Sys.Audit, Sys.Syslog'

## Troubleshooting

To check if you access to the api, you can run the following command :

    #  curl -k -d "username=root@pam&password=yourpassword"  https://10.0.0.1:8006/api2/json/access/ticket

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                                | Value                         |
| :----------------------------------- | :---------------------------- |
| Host name                            | *Name of the host*            |
| Alias                                | *Host description*            |
| IP                                   | *Host IP Address*             |
| Monitored from                       | *Monitoring Poller to use*    |
| Host Multiple Templates              | Virt-Promox-Pe-Restapi-Custom |

### Host Macro Configuration

The following macros must be configured on host:

Macro

Description

Default value

Example

PROXMOXAPIPORT

Port used to connect to the Proxmox API

8006

443

PROXMOXAPIUSERNAME

the Proxmox API user

PROXMOXAPIUSERNAME

monitoring

PROXMOXAPIPASSWORD

the Proxmox API user's password

PROXMOXAPIPASSWORD

HuGr6834

PROXMOXAPIREALM

the Proxmox API authentication mechanism

pam

pve

PROXMOXAPIPROTO

the Proxmox API protocol

https

http

Click on the *Save* button.


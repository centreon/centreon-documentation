---
id: applications-voip-xivo
title: XiVO VoIP Server
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.10 | `STABLE` | Feb 21 2018 |

## Prerequisites

This chapter describes the prerequisites installation needed by plugins to run.

### Dependencies

This plugin pack is dependent of "NTP Server" "HTTP Server" and "Asterisk VoIP Server SNMP", so you might have to
install these packages before being able to add this plugin pack:

``` shell
yum install centreon-pack-applications-protocol-ntp centreon-pack-applications-protocol-http centreon-pack-applications-voip-asterisk-snmp
```

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Operatingsystems-Linux-Snmp centreon-plugin-Applications-Protocol-Ntp centreon-plugin-Applications-Voip-Asterisk-Snmp centreon-plugin-Applications-Protocol-Http
```

### Remote server

The remote server must have a XiVO Appliance running and available.

## Centreon Configuration

### Create a XiVO server

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                                   | Value                      |
| :-------------------------------------- | :------------------------- |
| Host name                               | *Name of the host*         |
| Alias                                   | *Host description*         |
| IP                                      | *Host IP Address*          |
| Monitored from                          | *Monitoring Poller to use* |
| Host Multiple Templates                 | App-VoIP-XiVO-custom       |

Click on the *Save* button.

This service was automatically created for this host:

| Service                    | Description                     |
| :------------------------- | :------------------------------ |
| XiVO-process-nginx         | Monitor nginx processus         |
| XiVO-process-postgres      | Monitor postgres processus      |
| XiVO-process-xivo-agentd   | Monitor xivo-agentd processus   |
| XiVO-process-xivo-agid     | Monitor xivo-agid processus     |
| XiVO-process-xivo-amid     | Monitor xivo-amid processus     |
| XiVO-process-xivo-confgend | Monitor xivo-confgend processus |
| XiVO-process-xivo-ctid     | Monitor xivo-ctid processus     |

| Optionnal Service           | Description                      |
| :-------------------------- | :------------------------------- |
| XiVO-process-xivo-call-logd | Monitor xivo-call-logd processus |
| XiVO-process-xivo-confd     | Monitor xivo-confd processus     |
| XiVO-process-xivo-dxtora    | Monitor xivo-dxtora processus    |
| XiVO-process-xivo-provd     | Monitor xivo-provd processus     |



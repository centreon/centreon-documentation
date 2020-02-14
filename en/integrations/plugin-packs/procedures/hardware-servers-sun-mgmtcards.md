---
id: hardware-servers-sun-mgmtcards
title: Sun MgmtCard
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.2 | `STABLE` | Nov 22 2017 |

## Prerequisites

This chapter describes the prerequisites installation needed by plugins to run.

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Servers-Sun-Mgmtcards
```

The plugin has 3 kind of modes, it depends of the sun management card to monitor :

  - Telnet:
      - Dependency: Perl Module Net::Telnet (yum install perl-Net-Telnet.noarch)
      - Host macros: 'TELNETUSERNAME', 'TELNETPASSWORD'
  - SSH:
      - Dependency: 'plink' command (no ssh key exchange needed)
      - Host macros: 'SSHUSERNAME', 'SSHPASSWORD'
  - IPMI:
      - Dependency: 'ipmitool' command (yum install ipmitool)
      - Host macros: 'IPMIUSERNAME', 'IPMIPASSWORD'

### Sun Server Hardware List

| Host Template               | Method | Hardware                                   | Mgmt Card |
| --------------------------- | ------ | ------------------------------------------ | --------- |
| HW-Server-Sun-Alom4v-SSH    | SSH    | T1xxx, T2xxx                               | ALOM4v    |
| HW-Server-Sun-Ilom-SSH      | SSH    | T3-x, T4-x, T5xxx                          | ILOM      |
| HW-Server-Sun-Alom-TELNET   | Telnet | v240, v245, v440,...                       | ALOM      |
| HW-Server-Sun-Sf2xx-TELNET  | Telnet | sf280                                      | RSC       |
| HW-Server-Sun-Sfxxxx-TELNET | Telnet | sfXXXX (sf6900, ScpApp sf6800, sf3800,...) | RSC       |
| HW-Server-Sun-V4xx-TELNET   | Telnet | v4xx (v490, v480)                          | RSC       |
| HW-Server-Sun-V8xx-TELNET   | Telnet | v8xx (v890, v880)                          | RSC       |
| HW-Server-Sun-Ilom-IPMITOOL | Ipmi   | x4100,x4600,...                            | ILOM      |

### My Sun Hardware is not the list

Following hardware can be also monitored:

| Hardware                               | Host template Service                                    |
| -------------------------------------- | -------------------------------------------------------- |
| Mseries                                | HW-Server-Sun-Mseries-SNMP Linked with the host template |
| sf12k, sf15k, sf20k, sf25k             | HW-Server-Sun-Sfxxk-PSSH Linked with the host template   |
| v120, v1280 and others OS-Solaris-NRPE | OS-Solaris-Prtdiag-Status-NRPE-Custom                    |

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                                | Value                                |
| :----------------------------------- | :----------------------------------- |
| Host name                            | *Name of the host*                   |
| Alias                                | *Host description*                   |
| IP                                   | *Host IP Address*                    |
| Monitored from                       | *Monitoring Poller to use*           |
| Host Multiple Templates              | Template provided by the plugin-pack |
| *Relations \> Parent Hostgroups* tab |                                      |

Click on the *Save* button.



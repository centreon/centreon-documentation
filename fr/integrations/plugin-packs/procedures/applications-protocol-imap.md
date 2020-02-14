---
id: applications-protocol-imap
title: IMAP Server
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.9 | `STABLE` | Feb  6 2017 |

## Prerequisites

This chapter describes the prerequisites installation needed by plugins to run.

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Protocol-Imap
```

### Remote server

The remote server must have an IMAP service running and available.

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                                   | Value                      |
| :-------------------------------------- | :------------------------- |
| Host name                               | *Name of the host*         |
| Alias                                   | *Host description*         |
| IP                                      | *Host IP Address*          |
| Monitored from                          | *Monitoring Poller to use* |
| Host Multiple Templates                 | App-Protocol-IMAP-custom   |

Click on the *Save* button.

This service was automatically created for this host:

| Service    | Description             |
| :--------- | :---------------------- |
| IMAP-Login | Monitor user connection |

| Optionnal Service      | Description                   |
| :--------------------- | :---------------------------- |
| Search-Message-Generic | Monitor messages in a mailbox |

### Host Macro Configuration

The following macros must be configured on host:

| Macro        | Description              | Default value | Example |
| :----------- | :----------------------- | :------------ | :------ |
| IMAPUSERNAME | the imap user            | IMAPUSERNAME  | foo     |
| IMAPPASSWORD | the imap user's password | IMAPPASSWORD  | bar     |

## Monitor your IMAP Server with SSL or TLS

### What you need to configure

On your Host or Host template, please set the following macro :

| Macro            | Value  |
| :--------------- | :----- |
| IMAPEXTRAOPTIONS | \--ssl |


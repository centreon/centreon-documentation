---
id: applications-jenkins
title: Jenkins
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.7 | `STABLE` | Feb  6 2017 |

## Prerequisites

### Centreon Plugins

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Jenkins
```

## Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                                   | Value                      |
| :-------------------------------------- | :------------------------- |
| Host name                               | *Name of the host*         |
| Alias                                   | *Host description*         |
| IP                                      | *Host IP Address*          |
| Monitored from                          | *Monitoring Poller to use* |
| Host Multiple Templates                 | App-Jenkins-custom         |

Click on the *Save* button.

| Optionnal Service | Description        |
| :---------------- | :----------------- |
| job-state         | Monitor job status |

## Host Macro Configuration

The following macros must be configured on host (\* means mandatory options):

| Macro               | Description                               | Default value | Example |
| :------------------ | :---------------------------------------- | :------------ | :------ |
| JENKINSPROTO\*      | Protocol to connect to web interface      | http          | http    |
| JENKINSPORT\*       | Port to connect to web interface          | 80            | 80      |
| JENKINSEXTRAOPTIONS | Extra options to connect to web interface |               |         |

## Service Macro Configuration

The following macros must be configured on service (\* means mandatory options):

| Macro    | Description                     | Default value | Example  |
| :------- | :------------------------------ | :------------ | :------- |
| URLPATH  | Path to connect to web inteface | /jenkins      | /jenkins |
| JOBNAME  | the imap user's password        | IMAPPASSWORD  | bar      |
| WARNING  | Warning Thresold                | 60:           | 60:      |
| CRITICAL | Critical Thresold               | 30:           | 30:      |



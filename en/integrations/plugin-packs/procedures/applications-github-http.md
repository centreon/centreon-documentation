---
id: applications-github-http
title: Github
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | Aug 10 2017 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Github-Http
```

## Centreon Configuration

### Create a new host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | App-Github-Http-custom     |

Click on the *Save* button.

### Checks

Please deploy manually modes issues/commits/stats... because you need to specify your repository path for URLPATH macro
(/repo/OWNER/REPONAME)

Also do not forget to set GITHUBUSERNAME AND GITHUBPASSWORD macro value at the host level



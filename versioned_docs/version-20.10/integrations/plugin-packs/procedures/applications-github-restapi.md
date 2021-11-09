---
id: applications-github-restapi
title: Github
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Github-Restapi
```

## Centreon Configuration

### Create a new host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | App-Github-Restapi-custom  |

Click on the *Save* button.

### Checks

Please deploy manually modes issues/commits/stats... because you need to specify
your repository path for URLPATH macro (/repo/OWNER/REPONAME)

Also do not forget to set GITHUBUSERNAME AND GITHUBPASSWORD macro value at the
host level

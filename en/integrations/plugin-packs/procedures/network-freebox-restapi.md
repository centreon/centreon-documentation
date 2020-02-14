---
id: network-freebox-restapi
title: Freebox
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `DEV` | Nov 22 2017 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Network-Freebox-Restapi
```

### Rest API

The plugin need an AppID and a AppToken. To create a token, you can use that command (you'll need to be near your
freebox because you have to validate the token on the freebox screen):

$ curl <http://mafreebox.free.fr/api/v4/login/authorize/> -H "Content-type: application/json" -d '{ "app\_id":
"centreon", "app\_name": "Test Centreon", "app\_version": "1.0.0", "device\_name": "centreon monitoring server" }'
{"success":true,"result":{"app\_token":"uU2avKR3BM6Gf/VeV5lSy/rKsLg8CCX8K4jviMCokQdDeYfn/IGhqa9/brszrhXU","track\_id":0}}

You have to remove backslash characters and you have your AppToken. You can check if your AppToken is valid with the
following command:

$ curl <http://mafreebox.free.fr/api/v4/login/authorize/0>
{"success":true,"result":{"status":"granted","challenge":"cfMfSY6HufMVspzod9uh8ikGNyVhRe1M","password\_salt":"3MQ+O16Q8zY7eSUdLfndcSkc6jitkGoP"}}

If the status is 'granted', that's ok\!

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | Net-Freebox-Restapi-custom |

Click on the *Save* button.


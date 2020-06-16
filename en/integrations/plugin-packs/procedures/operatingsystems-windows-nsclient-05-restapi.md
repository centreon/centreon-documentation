---
id: operatingsystems-windows-nsclient-05-restapi
title: Windows NSClient API
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.13 | `STABLE` | Jan  18 2019 |

## Overview

NSClient++ provides is own REST API using the webserver module.
This REST API give the possibility to exploit monitoring data from windows servers through HTTPS connections.

## Plugin-Pack assets

### Monitored objects

* Windows Server OS from 2003 SP2 version
* Windows Workstation from XP version

### Monitored metrics

<!--DOCUSAURUS_CODE_TABS-->
<!--query/Counter-Active-Sessions-->

| Metric name     | Description                             |
| :-------------- | :-------------------------------------- |
| Sessions\_value | Number of actived sessions. Unit: Count |

<!--query/Counter-Generic-->

| Metric name    | Description                          |
| :------------- | :----------------------------------- |
| Counter\_value | Number of counter found. Unit: Count |

<!--query/Cpu-->

| Metric name | Description                                                      |
| :---------- | :--------------------------------------------------------------- |
| total 5m    | CPU Utilization of Windows serveur over 5 minutes. Unit: Percent |
| total 1m    | CPU Utilization of Windows serveur over 1 minutes. Unit: Percent |
| total 5s    | CPU Utilization of Windows serveur over 5 seconds. Unit: Percent |

<!--query/Disk-->

| Metric name | Description                                   |
| :---------- | :-------------------------------------------- |
| used        | Used and Total Storage allocated. Unit: Bytes |

<!--query/Eventlog-Generic-->

| Metric name  | Description                            |
| :----------- | :------------------------------------- |
| problemCount | Number of event log found. Unit: Count |

<!--query/Files-Generic-->

| Metric name | Description                        |
| :---------- | :--------------------------------- |
| count       | Number of files found. Unit: Count |

<!--query/Logfiles-Generic-->

| Metric name        | Description                                                                   |
| :----------------- | :---------------------------------------------------------------------------- |
| default\_lines     | Number of line that match with tag word found in logfile. Unit: Count         |
| default\_warnings  | Number of line that match with warning pattern found in logfile. Unit: Count  |
| default\_criticals | Number of line that match with critical pattern found in logfile. Unit: Count |
| default\_unknowns  | Number of line that match with unknown pattern found in logfile. Unit: Count  |

<!--query/Memory-->

| Metric name | Description                        |
| :---------- | :--------------------------------- |
| used        | Total usage of memory. Unit: Bytes |

<!--query/Swap-->

| Metric name | Description                             |
| :---------- | :-------------------------------------- |
| swap        | Total usage of swap memory. Unit: Bytes |

<!--query/Sessions-->

| Metric name                   | Description                                               |
| :---------------------------- | :-------------------------------------------------------- |
| sessions-created              | Number of created users session. Unit: Count              |
| sessions-disconnected         | Number of disconnected users session. Unit: Count         |
| sessions-reconnected          | Number of reconnected users session. Unit: Count          |
| sessions-active               | Number of active users session. Unit: Count               |
| sessions-disconnected-current | Number of current disconnected users session. Unit: Count |


<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

* TCP 8443 port must be open on the windows server (Default port for the REST API of NSClient++).

To securize the communication flow between the poller and the agent:

* Change the *port* parameter of the REST API into *nsclient.ini* file.
* Change the *allowed_hosts* parameter by setting the IP addresses of the Centreon pollers (to allow the connection only from these IPs).

### Configure the access 

To connect to the REST API of NSClient++, you need to enable the web service of NSClient++:

* From the windows server shell, execute the following command as administrator:

```nscp web install```

* Configure a new password for a better authentification:

```bash
nscp web password -- -set centreon
Password updated successfully, please restart nsclient++ for changes to affect.
```

* Now, you can restart the daemon:

```bash
net stop nscp
net start nscp
```


## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor Windows ressources using REST API:

```bash
yum install yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

2. On the Centreon Web interface, install the 'Windows NSClient API' Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor Windows ressources using REST API:

```bash
yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-operatingsystems-windows-nsclient-05-restapi
```

3. On the Centreon Web interface, install the 'Windows NSClient API' Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Create a new host in Centreon, apply the template "OS-Windows-NSClient-05-Restapi-custom".
* Configure all the mandatory macros :

| Mandatory | Name                      | Description                                                                |
| :-------- | :------------------------ | :------------------------------------------------------------------------- |
| X         | NSCPRESTAPIPORT           | Port of the REST API NSclient++ (default: 8443)                            |
| X         | NSCPRESTAPIPROTO          | Protocol used (default: https)                                             |
| X         | NSCPRESTAPILEGACYPASSWORD | Password used (configured in the prerequisites section)                    |
|           | NSCPRESTAPIEXTRAOPTIONS   | Any extra option you may want to add to the command (eg. a --verbose flag) |



## FAQ

### How do I test my configuration through the CLI and what do the main parameters stand for ? 

Once the Centreon plugin installed, you can test it logging with the centreon-engine user:

```bash
/usr/lib/centreon/plugins//centreon_nsclient_restapi.pl \
  --plugin=apps::nsclient::restapi::plugin \
  --mode=query --hostname='192.168.1.24' \
  --port='8443' \
  --proto='https' \
  --legacy-password='centreon' \
  --command=check_cpu \
  --arg="warning=time = '5m' and load > 80" \
  --arg="critical=time = '5m' and load > 90" \
  --arg=show-all

OK: 5m: 40%, 1m: 42%, 5s: 39% | 
'total 5m'=40%;80;90;; 
'total 1m'=42%;80;90;; 
'total 5s'=39%;80;90;;
```

The command above request the REST API NSclient++ (```--plugin=apps::nsclient::restapi::plugin```) on the port 8443 (```--port='8443'```).
It uses HTTPS protocol (```--proto='https'```) and the password created in the *prerequisites* section (```--legacy-password='centreon'```).
This command checks the cpu usage of the server (```--command=check_cpu```).

This command will trigger alerts :
  * a WARNING alert if the metric "total 5m" (```warning=time = 5m```) is superior to 80% (```load > 80%```)
  * a CRITICAL alert if the metric "total 5m" (```warning=time = 5m```) is superior to 90% (```load > 90%```)

You can display all of the modes that come with the Plugin with the command below: 

```bash
/usr/lib/centreon/plugins//centreon_nsclient_restapi.pl \
  --plugin=apps::nsclient::restapi::plugin \
  --list-mode
```

The available thresholds as well as all of the options that can be used with this Plugin can be displayed by adding the ```--help``` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_nsclient_restapi.pl \
  --plugin=apps::nsclient::restapi::plugin \
  --mode=query \
  --help
```

### Why do I get the following error: 

#### UNKNOWN: Cannot decode json response: malformed UTF-8 character in JSON string

If you receive this message, enable debug messages by adding ```--debug```:

```bash
/usr/lib/centreon/plugins//centreon_nsclient_restapi.pl \
  --plugin=apps::nsclient::restapi::plugin \
  --mode=query \
  --hostname='192.168.1.24' \
  --port='8443' \
  --proto='https' \
  --legacy-password='centreon' \
  --http-backend=curl  \
  --curl-opt="CURLOPT_SSL_VERIFYPEER => 0" \
  --timeout=30 \
  --command=check_centreon_plugins \
  --arg='os::windows::local::plugin' \
  --arg='sessions' \
  --arg='--filter-sessionname="" \
  --config="scripts/centreon/conf/qwinsta.xml" \
  --language="fr" \
  --debug

UNKNOWN: Cannot decode json response: malformed UTF-8 character in JSON string, at character offset 724 (before "\x{fffd}u0090RIPH\x{fffd}...") at /usr/lib/centreon/plugins//centreon_nsclient_restapi.pl line 133.
== Info: About to connect() to 192.168.1.24 port 8443 (#0)
== Info:   Trying 192.168.1.24...
== Info: Connected to 192.168.1.24 (192.168.1.24) port 8443 (#0)
.......
Cannot write statefile '/var/lib/centreon/centplugins/windows_sessions_a181a603769c1f98ad927e7367c7aa51_a181a603769c1f98ad927e7367c7aa51'. 
Need write/exec permissions on directory.
```

* The folder */var/lib/centreon/centplugins* doesn't exist on your Windows Sserver, change the cache directory by using the options ```--statefile-dir```

#### "UNKNOWN: 500 Can't connect to x.x.x.x:8443"

To fix this issue, add the option ```--http-backend=curl``` to the host macro *NSCPRESTAPIEXTRAOPTIONS*.

## Create your own NSClient++ agent

It's possible to create your own NSClient++ agent to add new commands and/or pre-configure the parameters of *nsclient.ini* file.

Please, follow the official documentation from Github to build your own agent :
* https://github.com/centreon/centreon-nsclient-build

You can find a "How-To" and the list of all the compilated plugins by Centreon for the *centreon_plugins.exe*

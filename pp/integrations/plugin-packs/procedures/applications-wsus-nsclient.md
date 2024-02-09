---
id: applications-wsus-nsclient
title: Microsoft WSUS Server
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Monitoring Connector **Microsoft WSUS** brings 2 different host templates:

* App-Wsus-NRPE-custom
* App-Wsus-NSClient-05-Restapi-custom

They bring the following service templates:

<Tabs groupId="sync">
<TabItem value="App-Wsus-NRPE-custom" label="App-Wsus-NRPE-custom">

| Service Alias          | Service Template                                   | Service Description                                   | Default |
|:-----------------------|:---------------------------------------------------|:------------------------------------------------------|:--------|
| Computers-Status       | App-Wsus-Computers-Status-NRPE                     | Check computers status count                          | X       |
| Server-Statistics      | App-Wsus-Server-Statistics-NRPE                    | Check serveral WSUS server statistics                 | X       |
| Synchronisation-Status | App-Wsus-Synchronisation-Status-NRPE               | Check updates synchronisation with WSUS server status | X       |
| Update-Status          | App-Wsus-Update-Status-NRPE                        | Check updates status                                  | X       |

</TabItem>
<TabItem value="App-Wsus-NSClient-05-Restapi-custom" label="App-Wsus-NSClient-05-Restapi-custom">

| Service Alias          | Service Template                                   | Service Description                                   | Default |
|:-----------------------|:---------------------------------------------------|:------------------------------------------------------|:--------|
| Computers-Status       | App-Wsus-Computers-Status-NSClient05-Restapi       | Check computers status count                          | X       |
| Server-Statistics      | App-Wsus-Server-Statistics-NSClient05-Restapi      | Check serveral WSUS server statistics                 | X       |
| Synchronisation-Status | App-Wsus-Synchronisation-Status-NSClient05-Restapi | Check updates synchronisation with WSUS server status | X       |
| Update-Status          | App-Wsus-Update-Status-NSClient05-Restapi          | Check updates status                                  | X       |

</TabItem>
</Tabs>

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Computers-Status" label="Computers-Status">

| Metric Name        | Unit  |
|:-------------------|:------|
| needing-updates    |       |
| not-contacted      |       |
| unassigned         |       |
| up-to-date         |       |
| with-update-errors |       |

</TabItem>
<TabItem value="Server-Statistics" label="Server-Statistics">

| Metric Name          | Unit  |
|:---------------------|:------|
| approved-updates     |       |
| computer-groups      |       |
| computers            |       |
| declined-updates     |       |
| expired-updates      |       |
| not-approved-updates |       |
| stale-updates        |       |
| updates              |       |

</TabItem>
<TabItem value="Synchronisation-Status" label="Synchronisation-Status">

| Metric Name                   | Unit  |
|:------------------------------|:------|
| synchronisation-progress      |       |
| synchronisation-status        |       |
| last-synchronisation-duration |       |
| last-synchronisation-status   |       |

</TabItem>
<TabItem value="Update-Status" label="Update-Status">

| Metric Name         | Unit  |
|:--------------------|:------|
| needed-by-computers |       |
| needing-files       |       |
| up-to-date          |       |
| with-client-errors  |       |
| with-server-errors  |       |

</TabItem>
</Tabs>

## Prerequisites

### Centreon NSClient++

<Tabs groupId="sync">
<TabItem value="App-Wsus-NRPE-custom" label="App-Wsus-NRPE-custom">

To monitor a *WSUS Server* through NSClient++ API, install the Centreon packaged version
of the NSClient++ agent. Please follow our [official documentation](../getting-started/how-to-guides/centreon-nsclient-tutorial.md)
and make sure that the **NRPE Server** configuration is correct.

</TabItem>
<TabItem value="App-Wsus-NSClient-05-Restapi-custom" label="App-Wsus-NSClient-05-Restapi-custom">

To monitor a *WSUS Server* through NSClient++ API, install the Centreon packaged version
of the NSClient++ agent. Please follow our [official documentation](../getting-started/how-to-guides/centreon-nsclient-tutorial.md)
and make sure that the **Webserver / RESTApi** configuration is correct.

</TabItem>
</Tabs>

## Setup

### Monitoring Pack

If the platform uses an *online* license, you can skip the package installation
instructions below as it is not required in order to have the pack displayed within the
**Configuration > Monitoring Connector Manager** menu.

> If you want to use the **NRPE** host template, please install centreon-nrpe3 package.

If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-wsus-nsclient
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-wsus-nsclient
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-wsus-nsclient
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Microsoft WSUS** Pack through
the **Configuration > Monitoring Connector Manager** menu.

### Plugin

Use the commands below according to your operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-nrpe3-plugin
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-nrpe3-plugin
yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-nrpe3-plugin
apt install centreon-plugin-operatingsystems-windows-restapi
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **WSUS Server** server settings.
* Apply the chosen template to the host: **App-Wsus-NRPE-custom** or **App-Wsus-NSClient-05-Restapi-custom**.
* Depending on the Host template, fill the Macro fields as follows:

<Tabs groupId="sync">
<TabItem value="App-Wsus-NRPE-custom" label="App-Wsus-NRPE-custom">

| Mandatory   | Macro                     | Description                                                                            |
|:------------|:--------------------------|:---------------------------------------------------------------------------------------|
|             | NRPECLIENT                | Recommend check_centreon_nrpe3 (Default: 'check_centreon_nrpe')                        |
|             | NRPEEXTRAOPTIONS          | -u -m 8192                                                                             |
|             | NRPEPORT                  | (Default: '5666')                                                                      |
|             | NRPETIMEOUT               | (Default: '55')                                                                        |
|             | WSUSPORT                  | WSUS Server port                                                                       |
|             | WSUSSERVER                | WSUS Server name                                                                       |

</TabItem>
<TabItem value="App-Wsus-NSClient-05-Restapi-custom" label="App-Wsus-NSClient-05-Restapi-custom">

| Mandatory   | Macro                     | Description                                                                            |
|:------------|:--------------------------|:---------------------------------------------------------------------------------------|
|             | NSCPRESTAPIEXTRAOPTIONS   | Any extra option you may want to add to every command line (eg. a --verbose flag)      |
|             | NSCPRESTAPILEGACYPASSWORD | API Password                                                                           |
|             | NSCPRESTAPIPORT           | API Port                                                                               |
|             | NSCPRESTAPIPROTO          | API Protocol                                                                           |
|             | WSUSPORT                  | WSUS Server port                                                                       |
|             | WSUSSERVER                | WSUS Server name                                                                       |

</TabItem>
</Tabs>

## How to check in the CLI that the configuration is OK and what are the main options for?

> The following examples come for the RestAPI template.

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_nsclient_restapi.pl \
    --plugin=apps::nsclient::restapi::plugin \
    --mode=query \
    --hostname=10.0.0.1 \
    --port='' \
    --proto='' \
    --legacy-password='' \
    --command=check_centreon_plugins \
    --arg='apps::microsoft::wsus::local::plugin' \
    --arg='server-statistics' \
    --arg=' \
    --wsus-server="my.wsus.server.domain" \
    --wsus-port="443" \
    --filter-counters="" \
    --warning-computers="" \
    --critical-computers="" \
    --warning-computer-groups="" \
    --critical-computer-groups="" \
    --warning-updates="" \
    --critical-updates="" \
    --warning-approved-updates="" \
    --critical-approved-updates="" \
    --warning-declined-updates="" \
    --critical-declined-updates=""\
    --warning-not-approved-updates="" \
    --critical-declined-updates="" \
    --warning-stale-updates="" \
    --critical-stale-updates="" \
    --warning-expired-updates="" \
    --critical-expired-updates="" \
    --verbose'\
    --use-new-perfdata
```

The expected command output is shown below:

```bash
OK: Computers: 120 Computer Groups: 6 Updates: 19 Approved Updates: 3 Declined Updates: 14 Not Approved Updates: 22 Stale Updates: 1 Expired Updates: 5 | 
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_nsclient_restapi.pl \
    --plugin=apps::nsclient::restapi::plugin \
    --mode=query \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_nsclient_restapi.pl \
    --plugin=apps::nsclient::restapi::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation here](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.
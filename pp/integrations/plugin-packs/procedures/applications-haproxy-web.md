---
id: applications-haproxy-web
title: HAProxy Web API
description: "Monitor HAProxy load balancers via the JSON stats API: backend and frontend usage, sessions, traffic, and status checks."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **HAProxy Web** connector through the
**Configuration > Monitoring Connector Manager** menu:
* [Base Pack](./base-generic.md)

## Pack assets

This connector allows you to monitor HAProxy (including OSS/free versions) using the HAProxy ‘stats’ page. 
It only supports the json format, the csv format is not compatible.

### Templates

The Monitoring Connector **HAProxy Web** brings a host template:

* **App-Haproxy-Web-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Haproxy-Web-custom" label="App-Haproxy-Web-custom">

> This host template has no associated service by default. Use the service discovery rules to deploy your services.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias  | Service Template                      | Service Description                              | Discovery |
|:---------------|:--------------------------------------|:-------------------------------------------------|:---------:|
| Backend-Usage  | App-Haproxy-Web-Backend-Usage-custom  | Check backend usage with associated "servers"    |     X     |
| Frontend-Usage | App-Haproxy-Web-Frontend-Usage-custom | Check frontend usage with associated "listeners" |     X     |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                     | Description                           |
|:------------------------------|:--------------------------------------|
| App-Haproxy-Web-Backend-Name  | Discover 'backends' and monitor them  |
| App-Haproxy-Web-Frontend-Name | Discover 'frontends' and monitor them |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Backend-Usage" label="Backend-Usage">

| Name                                                 | Unit  |
|:-----------------------------------------------------|:------|
| backend-status                                       | N/A   |
| *backends*~backend.queue.current.count               | count |
| backend-current-session-rate                         | N/A   |
| backend-max-session-rate                             | N/A   |
| *backends*~backend.sessions.current.count            | count |
| *backends*~backend.sessions.total.count              | count |
| *backends*~backend.traffic.in.bitpersecond           | b/s   |
| *backends*~backend.traffic.out.bitpersecond          | b/s   |
| *backends*~backend.requests.denied.count             | count |
| *backends*~backend.responses.denied.count            | count |
| *backends*~backend.connections.error.count           | count |
| *backends*~backend.responses.error.count             | count |
| server-status                                        | N/A   |
| server-status                                        | N/A   |
| *backends*~*servers1*#server.sessions.current.count  | count |
| *backends*~*servers2*#server.sessions.current.count  | count |
| server-current-session-rate                          | N/A   |
| server-current-session-rate                          | N/A   |
| server-max-session-rate                              | N/A   |
| server-max-session-rate                              | N/A   |
| *backends*~*servers1*#server.responses.denied.count  | count |
| *backends*~*servers2*#server.responses.denied.count  | count |
| *backends*~*servers1*#server.connections.error.count | count |
| *backends*~*servers2*#server.connections.error.count | count |
| *backends*~*servers1*#server.responses.error.count   | count |
| *backends*~*servers2*#server.responses.error.count   | count |

</TabItem>
<TabItem value="Frontend-Usage" label="Frontend-Usage">

| Name                                                      | Unit  |
|:----------------------------------------------------------|:------|
| frontend-status                                           | N/A   |
| frontend-current-session-rate                             | N/A   |
| frontend-max-session-rate                                 | N/A   |
| *frontends*~frontend.sessions.current.count               | count |
| *frontends*~frontend.sessions.total.count                 | count |
| *frontends*~frontend.sessions.maximum.count               | count |
| *frontends*~frontend.traffic.in.bitpersecond              | b/s   |
| *frontends*~frontend.traffic.out.bitpersecond             | b/s   |
| *frontends*~frontend.requests.denied.count                | count |
| *frontends*~frontend.responses.denied.count               | count |
| *frontends*~frontend.requests.error.count                 | count |
| listener-status                                           | N/A   |
| *frontends*~*listeners*#listener.sessions.current.count   | count |
| *frontends*~*listeners*#listener.requests.denied.count    | count |
| *frontends*~*listeners*#listener.responses.denied.count   | count |
| *frontends*~*listeners*#listener.requests.error.count     | count |
| *frontends*~*listeners*#listener.traffic.in.bitpersecond  | b/s   |
| *frontends*~*listeners*#listener.traffic.out.bitpersecond | b/s   |

</TabItem>
</Tabs>

## Prerequisites

To monitor HAProxy statistics via the API, you need to enable the statistics interface in HAProxy.
In your `haproxy.cfg` configuration file, add or modify the following section:

```bash
listen stats
    bind *:8404
    stats enable
    stats uri /haproxy?stats
    stats auth username:password
    stats refresh 10s
```

> `bind *:8404`: Exposes the statistics page on port 8404.
> `stats uri /haproxy?stats`: Defines the URL to access the statistics.
> `stats auth username:password`: Sets authentication (choose your own username/password).
> `stats refresh 10s`: Refreshes the statistics every 10 seconds (you can adjust this value as needed).

You can verify access to the API page (from a browser or using curl):

```bash
curl -u username:password http://IP_HAPROXY:8404/haproxy?stats
```

## Installing the monitoring connector

### Pack

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Monitoring Connector Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-haproxy-web
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-haproxy-web
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-haproxy-web
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-haproxy-web
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **HAProxy Web** connector through
the **Configuration > Monitoring Connector Manager** menu.

### Plugin

Since Centreon 22.04, you can benefit from the 'Automatic plugin installation' feature.
When this feature is enabled, you can skip the installation part below.

You still have to manually install the plugin on the poller(s) when:
- Automatic plugin installation is turned off
- You want to run a discovery job from a poller that doesn't monitor any resource of this kind yet

> More information in the [Installing the plugin](/docs/monitoring/pluginpacks/#installing-the-plugin) section.

Use the commands below according to your operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Applications-Haproxy-Web
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Haproxy-Web
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-haproxy-web
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Haproxy-Web
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Haproxy-Web-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro           | Description | Default value     | Mandatory   |
|:----------------|:------------|:------------------|:-----------:|
| HAPROXYUSERNAME |             | login             |             |
| HAPROXYPASSWORD |             | password          |             |
| HAPROXYPROTOCOL |             | http              |             |
| HAPROXYPORT     |             | 8404              |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Backend-Usage" label="Backend-Usage">

| Macro                             | Description                                                                                                                                                                                                                        | Default value     | Mandatory   |
|:----------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME                        | Define which backends should be monitored based on their names. This option will be treated as a regular expression                                                                                                                | .*                |             |
| WARNINGBACKENDCONNECTIONSERRORS   | Thresholds                                                                                                                                                                                                                         |                   |             |
| CRITICALBACKENDCONNECTIONSERRORS  | Thresholds                                                                                                                                                                                                                         |                   |             |
| WARNINGBACKENDCURRENTQUEUE        | Thresholds                                                                                                                                                                                                                         |                   |             |
| CRITICALBACKENDCURRENTQUEUE       | Thresholds                                                                                                                                                                                                                         |                   |             |
| WARNINGBACKENDCURRENTSESSIONRATE  | Thresholds                                                                                                                                                                                                                         |                   |             |
| CRITICALBACKENDCURRENTSESSIONRATE | Thresholds                                                                                                                                                                                                                         |                   |             |
| WARNINGBACKENDCURRENTSESSIONS     | Thresholds                                                                                                                                                                                                                         |                   |             |
| CRITICALBACKENDCURRENTSESSIONS    | Thresholds                                                                                                                                                                                                                         |                   |             |
| WARNINGBACKENDDENIEDREQUESTS      | Thresholds                                                                                                                                                                                                                         |                   |             |
| CRITICALBACKENDDENIEDREQUESTS     | Thresholds                                                                                                                                                                                                                         |                   |             |
| WARNINGBACKENDDENIEDRESPONSES     | Thresholds                                                                                                                                                                                                                         |                   |             |
| CRITICALBACKENDDENIEDRESPONSES    | Thresholds                                                                                                                                                                                                                         |                   |             |
| WARNINGBACKENDMAXSESSIONRATE      | Thresholds                                                                                                                                                                                                                         |                   |             |
| CRITICALBACKENDMAXSESSIONRATE     | Thresholds                                                                                                                                                                                                                         |                   |             |
| WARNINGBACKENDRESPONSESERRORS     | Thresholds                                                                                                                                                                                                                         |                   |             |
| CRITICALBACKENDRESPONSESERRORS    | Thresholds                                                                                                                                                                                                                         |                   |             |
| WARNINGBACKENDSTATUS              | Define the conditions to match for the backend status to be WARNING. You can use the following variables: %\{status\}.  Example: C\<--warning-backend-status='%\{status\} !~ /UP/i'\>                                              |                   |             |
| CRITICALBACKENDSTATUS             | Define the conditions to match for the backend status to be CRITICAL. Default: C\<'%\{status\} !~ /UP/i'\>. You can use the following variables: C\<%\{status\}\>.  Example: C\<--critical-backend-status='%\{status\} !~ /UP/i'\> |                   |             |
| WARNINGBACKENDTOTALSESSIONS       | Thresholds                                                                                                                                                                                                                         |                   |             |
| CRITICALBACKENDTOTALSESSIONS      | Thresholds                                                                                                                                                                                                                         |                   |             |
| WARNINGBACKENDTRAFFICIN           | Thresholds in b/s                                                                                                                                                                                                                  |                   |             |
| CRITICALBACKENDTRAFFICIN          | Thresholds in b/s                                                                                                                                                                                                                  |                   |             |
| WARNINGBACKENDTRAFFICOUT          | Thresholds in b/s                                                                                                                                                                                                                  |                   |             |
| CRITICALBACKENDTRAFFICOUT         | Thresholds in b/s                                                                                                                                                                                                                  |                   |             |
| WARNINGSERVERCONNECTIONSERRORS    | Thresholds                                                                                                                                                                                                                         |                   |             |
| CRITICALSERVERCONNECTIONSERRORS   | Thresholds                                                                                                                                                                                                                         |                   |             |
| WARNINGSERVERCURRENTSESSIONRATE   | Thresholds                                                                                                                                                                                                                         |                   |             |
| CRITICALSERVERCURRENTSESSIONRATE  | Thresholds                                                                                                                                                                                                                         |                   |             |
| WARNINGSERVERCURRENTSESSIONS      | Thresholds                                                                                                                                                                                                                         |                   |             |
| CRITICALSERVERCURRENTSESSIONS     | Thresholds                                                                                                                                                                                                                         |                   |             |
| WARNINGSERVERDENIEDRESPONSES      | Thresholds                                                                                                                                                                                                                         |                   |             |
| CRITICALSERVERDENIEDRESPONSES     | Thresholds                                                                                                                                                                                                                         |                   |             |
| WARNINGSERVERMAXSESSIONRATE       | Thresholds                                                                                                                                                                                                                         |                   |             |
| CRITICALSERVERMAXSESSIONRATE      | Thresholds                                                                                                                                                                                                                         |                   |             |
| WARNINGSERVERRESPONSESERRORS      | Thresholds                                                                                                                                                                                                                         |                   |             |
| CRITICALSERVERRESPONSESERRORS     | Thresholds                                                                                                                                                                                                                         |                   |             |
| WARNINGSERVERSTATUS               | Define the conditions to match for the server status to be WARNING. You can use the following variables: C\<%\{status\}\>.  Example: C\<--warning-backend-status='%\{status\} !~ /UP/i'\>                                          |                   |             |
| CRITICALSERVERSTATUS              | Define the conditions to match for the status to be CRITICAL. Default: C\<'%\{status\} !~ /UP/i'\>. You can use the following variables: C\<%\{status\}\>.  Example: C\<--critical-backend-status='%\{status\} !~ /UP/i'\>         |                   |             |
| EXTRAOPTIONS                      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                                 | --verbose         |             |

</TabItem>
<TabItem value="Frontend-Usage" label="Frontend-Usage">

| Macro                              | Description                                                                                                                                                                                                                       | Default value     | Mandatory   |
|:-----------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME                         | Define which frontends should be monitored based on their names. This option will be treated as a regular expression                                                                                                              | .*                |             |
| WARNINGFRONTENDCURRENTSESSIONRATE  | Thresholds                                                                                                                                                                                                                        |                   |             |
| CRITICALFRONTENDCURRENTSESSIONRATE | Thresholds                                                                                                                                                                                                                        |                   |             |
| WARNINGFRONTENDCURRENTSESSIONS     | Thresholds                                                                                                                                                                                                                        |                   |             |
| CRITICALFRONTENDCURRENTSESSIONS    | Thresholds                                                                                                                                                                                                                        |                   |             |
| WARNINGFRONTENDDENIEDREQUESTS      | Thresholds                                                                                                                                                                                                                        |                   |             |
| CRITICALFRONTENDDENIEDREQUESTS     | Thresholds                                                                                                                                                                                                                        |                   |             |
| WARNINGFRONTENDDENIEDRESPONSES     | Thresholds                                                                                                                                                                                                                        |                   |             |
| CRITICALFRONTENDDENIEDRESPONSES    | Thresholds                                                                                                                                                                                                                        |                   |             |
| WARNINGFRONTENDERRORSREQUESTS      | Thresholds                                                                                                                                                                                                                        |                   |             |
| CRITICALFRONTENDERRORSREQUESTS     | Thresholds                                                                                                                                                                                                                        |                   |             |
| WARNINGFRONTENDMAXSESSIONRATE      | Thresholds                                                                                                                                                                                                                        |                   |             |
| CRITICALFRONTENDMAXSESSIONRATE     | Thresholds                                                                                                                                                                                                                        |                   |             |
| WARNINGFRONTENDMAXSESSIONS         | Thresholds                                                                                                                                                                                                                        |                   |             |
| CRITICALFRONTENDMAXSESSIONS        | Thresholds                                                                                                                                                                                                                        |                   |             |
| WARNINGFRONTENDSTATUS              | Define the conditions to match for the status to be B\<WARNING\>.  You can use the following variables: C\<%\{status\}\>.  Example: C\<--warning-frontend-status='%\{status\} !~ /UP/i'\>                                         |                   |             |
| CRITICALFRONTENDSTATUS             | Define the conditions to match for the status to be B\<CRITICAL\>. Default: C\<%\{status\} !~ /OPEN/i\>.  You can use the following variables: C\<%\{status\}\>.  Example: C\<--critical-frontend-status='%\{status\} !~ /UP/i'\> |                   |             |
| WARNINGFRONTENDTOTALSESSIONS       | Thresholds                                                                                                                                                                                                                        |                   |             |
| CRITICALFRONTENDTOTALSESSIONS      | Thresholds                                                                                                                                                                                                                        |                   |             |
| WARNINGFRONTENDTRAFFICIN           | Thresholds in b/s                                                                                                                                                                                                                 |                   |             |
| CRITICALFRONTENDTRAFFICIN          | Thresholds in b/s                                                                                                                                                                                                                 |                   |             |
| WARNINGFRONTENDTRAFFICOUT          | Thresholds in b/s                                                                                                                                                                                                                 |                   |             |
| CRITICALFRONTENDTRAFFICOUT         | Thresholds in b/s                                                                                                                                                                                                                 |                   |             |
| WARNINGLISTENERCURRENTSESSIONS     | Thresholds                                                                                                                                                                                                                        |                   |             |
| CRITICALLISTENERCURRENTSESSIONS    | Thresholds                                                                                                                                                                                                                        |                   |             |
| WARNINGLISTENERDENIEDREQUESTS      | Thresholds                                                                                                                                                                                                                        |                   |             |
| CRITICALLISTENERDENIEDREQUESTS     | Thresholds                                                                                                                                                                                                                        |                   |             |
| WARNINGLISTENERDENIEDRESPONSES     | Thresholds                                                                                                                                                                                                                        |                   |             |
| CRITICALLISTENERDENIEDRESPONSES    | Thresholds                                                                                                                                                                                                                        |                   |             |
| WARNINGLISTENERERRORSREQUESTS      | Thresholds                                                                                                                                                                                                                        |                   |             |
| CRITICALLISTENERERRORSREQUESTS     | Thresholds                                                                                                                                                                                                                        |                   |             |
| WARNINGLISTENERSTATUS              | Define the conditions to match for the status to be B\<WARNING\>  You can use the following variables: C\<%\{status\}\>.  Example: C\<--warning-listener-status='%\{status\} !~ /UP/i'\>                                          |                   |             |
| CRITICALLISTENERSTATUS             | Define the conditions to match for the status to be B\<CRITICAL\>. Default: C\<%\{status\} !~ /OPEN/i\>.  You can use the following variables: C\<%\{status\}\>.  Example: C\<--critical-listener-status='%\{status\} !~ /UP/i'\> |                   |             |
| WARNINGLISTENERTRAFFICIN           | Thresholds in b/s                                                                                                                                                                                                                 |                   |             |
| CRITICALLISTENERTRAFFICIN          | Thresholds in b/s                                                                                                                                                                                                                 |                   |             |
| WARNINGLISTENERTRAFFICOUT          | Thresholds in b/s                                                                                                                                                                                                                 |                   |             |
| CRITICALLISTENERTRAFFICOUT         | Thresholds in b/s                                                                                                                                                                                                                 |                   |             |
| EXTRAOPTIONS                       | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                                | --verbose         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_haproxy_web.pl \
	--plugin=apps::haproxy::web::plugin  \
	--mode=backend-usage \
	--hostname='10.0.0.1' \
	--port='8404' \
	--proto='http' \
	--username='login' \
	--password='password'  \
	--filter-name='.*' \
	--warning-backend-status='' \
	--critical-backend-status='' \
	--warning-backend-current-queue='' \
	--critical-backend-current-queue='' \
	--warning-backend-current-session-rate='' \
	--critical-backend-current-session-rate='' \
	--warning-backend-max-session-rate='' \
	--critical-backend-max-session-rate='' \
	--warning-backend-current-sessions='' \
	--critical-backend-current-sessions='' \
	--warning-backend-total-sessions='' \
	--critical-backend-total-sessions='' \
	--warning-backend-traffic-in='' \
	--critical-backend-traffic-in='' \
	--warning-backend-traffic-out='' \
	--critical-backend-traffic-out='' \
	--warning-backend-denied-requests='' \
	--critical-backend-denied-requests='' \
	--warning-backend-denied-responses='' \
	--critical-backend-denied-responses='' \
	--warning-backend-connections-errors='' \
	--critical-backend-connections-errors='' \
	--warning-backend-responses-errors='' \
	--critical-backend-responses-errors='' \
	--warning-server-status='' \
	--critical-server-status='' \
	--warning-server-current-sessions='' \
	--critical-server-current-sessions='' \
	--warning-server-current-session-rate='' \
	--critical-server-current-session-rate='' \
	--warning-server-max-session-rate='' \
	--critical-server-max-session-rate='' \
	--warning-server-denied-responses='' \
	--critical-server-denied-responses='' \
	--warning-server-connections-errors='' \
	--critical-server-connections-errors='' \
	--warning-server-responses-errors='' \
	--critical-server-responses-errors='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: current queue: 46578 current session rate: 39271/s max session rate: 2934/s current sessions: 17139 total sessions: 4481 traffic in: 79901 79901/s traffic out: 13701 13701/s denied requests: 11391 denied responses: 55189 connection errors: 63151 responses errors: 12544 Servers are ok | 'backends~backend.queue.current.count'=46578;;;0; 'backends~backend.session.current.rate.countpersecond'=39271;;;0; 'backends~backend.session.max.rate.countpersecond'=2934;;;0; 'backends~backend.sessions.current.count'=17139;;;0; 'backends~backend.sessions.total.count'=4481;;;0; 'backends~backend.traffic.in.bitpersecond'=79901b/s;;;0; 'backends~backend.traffic.out.bitpersecond'=13701b/s;;;0; 'backends~backend.requests.denied.count'=11391;;;0; 'backends~backend.responses.denied.count'=55189;;;0; 'backends~backend.connections.error.count'=63151;;;0; 'backends~backend.responses.error.count'=12544;;;0; 'backends~servers1#server.sessions.current.count'=85843;;;0; 'backends~servers2#server.sessions.current.count'=46527;;;0; 'backends~servers1#server.session.current.rate.countpersecond'=53920;;;0; 'backends~servers2#server.session.current.rate.countpersecond'=89626;;;0; 'backends~servers1#server.session.max.rate.countpersecond'=76902;;;0; 'backends~servers2#server.session.max.rate.countpersecond'=74257;;;0; 'backends~servers1#server.responses.denied.count'=30946;;;0; 'backends~servers2#server.responses.denied.count'=48861;;;0; 'backends~servers1#server.connections.error.count'=57703;;;0; 'backends~servers2#server.connections.error.count'=43456;;;0; 'backends~servers1#server.responses.error.count'=48057;;;0; 'backends~servers2#server.responses.error.count'=69566;;;0; 
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.

### Available modes

In most cases, a mode corresponds to a service template. The mode appears in the execution command for the connector.
In the Centreon interface, you don't need to specify a mode explicitly: its use is implied when you apply a service template.
However, you will need to specify the correct mode for the template if you want to test the execution command for the 
connector in your terminal.

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_haproxy_web.pl \
	--plugin=apps::haproxy::web::plugin  \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                          | Linked service template               |
|:------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------|
| backend-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/haproxy/web/mode/backendusage.pm)]   | App-Haproxy-Web-Backend-Usage-custom  |
| frontend-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/haproxy/web/mode/frontendusage.pm)] | App-Haproxy-Web-Frontend-Usage-custom |
| list-objects [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/haproxy/web/mode/listobjects.pm)]     | Used for service discovery            |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --custommode                               |   When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          |   List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 |   Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --change-output-adv                        |   Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will  change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              |   Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --filter-counters                          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --http-peer-addr                           |   Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 |   Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 |   Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 |   Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             |   Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --hostname                                 |   IP address or FQDN of the HAProxy server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --port                                     |   Port used by the web server                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --proto                                    |   Specify https if needed (default: 'http')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --urlpath                                  |   Define the path of the web page to get (default: '/stats;json;').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --credentials                              |   Specify this option if you are accessing a web page using authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --username                                 |   Specify the username for authentication (mandatory if --credentials is specified).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --password                                 |   Specify the password for authentication (mandatory if --credentials is specified).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --basic                                    |   Specify this option if you are accessing a web page using basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your web server.  Specify this option if you are accessing a web page using hidden basic authentication or you'll get a '404 NOT FOUND' error.  (use with --credentials)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --ntlmv2                                   |   Specify this option if you are accessing a web page using NTLMv2 authentication (use with C\<--credentials\> and C\<--port\> options).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --timeout                                  |   Define the timeout in seconds (default: 5).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Backend-Usage" label="Backend-Usage">

| Option                                  | Description                                                                                                                                                                                                                            |
|:----------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --add-servers                           |   Also display and monitor Servers related to a given backend.                                                                                                                                                                         |
| --filter-counters                       |   Define which counters should appear in the performance data (metrics). This option will be treated as a regular expression.  Example: C\<--filter-counters='^total-connections$'\>.                                                  |
| --filter-name                           |   Define which backends should be monitored based on their names. This option will be treated as a regular expression.                                                                                                                 |
| --warning-backend-status                |   Define the conditions to match for the backend status to be WARNING. You can use the following variables: %\{status\}.  Example: C\<--warning-backend-status='%\{status\} !~ /UP/i'\>                                                |
| --critical-backend-status               |   Define the conditions to match for the backend status to be CRITICAL. Default: C\<'%\{status\} !~ /UP/i'\>. You can use the following variables: C\<%\{status\}\>.  Example: C\<--critical-backend-status='%\{status\} !~ /UP/i'\>   |
| --warning-server-status                 |   Define the conditions to match for the server status to be WARNING. You can use the following variables: C\<%\{status\}\>.  Example: C\<--warning-backend-status='%\{status\} !~ /UP/i'\>                                            |
| --critical-server-status                |   Define the conditions to match for the status to be CRITICAL. Default: C\<'%\{status\} !~ /UP/i'\>. You can use the following variables: C\<%\{status\}\>.  Example: C\<--critical-backend-status='%\{status\} !~ /UP/i'\>           |
| --warning-backend-current-queue         |   Thresholds.                                                                                                                                                                                                                          |
| --critical-backend-current-queue        |   Thresholds.                                                                                                                                                                                                                          |
| --warning-backend-current-session-rate  |   Thresholds.                                                                                                                                                                                                                          |
| --critical-backend-current-session-rate |   Thresholds.                                                                                                                                                                                                                          |
| --warning-backend-max-session-rate      |   Thresholds.                                                                                                                                                                                                                          |
| --critical-backend-max-session-rate     |   Thresholds.                                                                                                                                                                                                                          |
| --warning-backend-current-sessions      |   Thresholds.                                                                                                                                                                                                                          |
| --critical-backend-current-sessions     |   Thresholds.                                                                                                                                                                                                                          |
| --warning-backend-total-sessions        |   Thresholds.                                                                                                                                                                                                                          |
| --critical-backend-total-sessions       |   Thresholds.                                                                                                                                                                                                                          |
| --warning-backend-traffic-in            |   Thresholds in b/s.                                                                                                                                                                                                                   |
| --critical-backend-traffic-in           |   Thresholds in b/s.                                                                                                                                                                                                                   |
| --warning-backend-traffic-out           |   Thresholds in b/s.                                                                                                                                                                                                                   |
| --critical-backend-traffic-out          |   Thresholds in b/s.                                                                                                                                                                                                                   |
| --warning-backend-denied-requests       |   Thresholds.                                                                                                                                                                                                                          |
| --critical-backend-denied-requests      |   Thresholds.                                                                                                                                                                                                                          |
| --warning-backend-denied-responses      |   Thresholds.                                                                                                                                                                                                                          |
| --critical-backend-denied-responses     |   Thresholds.                                                                                                                                                                                                                          |
| --warning-backend-connections-errors    |   Thresholds.                                                                                                                                                                                                                          |
| --critical-backend-connections-errors   |   Thresholds.                                                                                                                                                                                                                          |
| --warning-backend-responses-errors      |   Thresholds.                                                                                                                                                                                                                          |
| --critical-backend-responses-errors     |   Thresholds.                                                                                                                                                                                                                          |
| --warning-server-current-sessions       |   Thresholds.                                                                                                                                                                                                                          |
| --critical-server-current-sessions      |   Thresholds.                                                                                                                                                                                                                          |
| --warning-server-current-session-rate   |   Thresholds.                                                                                                                                                                                                                          |
| --critical-server-current-session-rate  |   Thresholds.                                                                                                                                                                                                                          |
| --warning-server-max-session-rate       |   Thresholds.                                                                                                                                                                                                                          |
| --critical-server-max-session-rate      |   Thresholds.                                                                                                                                                                                                                          |
| --warning-server-denied-responses       |   Thresholds.                                                                                                                                                                                                                          |
| --critical-server-denied-responses      |   Thresholds.                                                                                                                                                                                                                          |
| --warning-server-connections-errors     |   Thresholds.                                                                                                                                                                                                                          |
| --critical-server-connections-errors    |   Thresholds.                                                                                                                                                                                                                          |
| --warning-server-responses-errors       |   Thresholds.                                                                                                                                                                                                                          |
| --critical-server-responses-errors      |   Thresholds.                                                                                                                                                                                                                          |

</TabItem>
<TabItem value="Frontend-Usage" label="Frontend-Usage">

| Option                                   | Description                                                                                                                                                                                                                           |
|:-----------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --add-listeners                          |   Also display and monitor listeners related to a given frontend.                                                                                                                                                                     |
| --filter-counters                        |   Define which counters should appear in the performance data (metrics). This option will be treated as a regular expression.  Example: --filter-counters='^total-connections$'.                                                      |
| --filter-name                            |   Define which frontends should be monitored based on their names. This option will be treated as a regular expression.                                                                                                               |
| --warning-frontend-status                |   Define the conditions to match for the status to be B\<WARNING\>.  You can use the following variables: C\<%\{status\}\>.  Example: C\<--warning-frontend-status='%\{status\} !~ /UP/i'\>                                           |
| --critical-frontend-status               |   Define the conditions to match for the status to be B\<CRITICAL\>. Default: C\<%\{status\} !~ /OPEN/i\>.  You can use the following variables: C\<%\{status\}\>.  Example: C\<--critical-frontend-status='%\{status\} !~ /UP/i'\>   |
| --warning-listener-status                |   Define the conditions to match for the status to be B\<WARNING\>  You can use the following variables: C\<%\{status\}\>.  Example: C\<--warning-listener-status='%\{status\} !~ /UP/i'\>                                            |
| --critical-listener-status               |   Define the conditions to match for the status to be B\<CRITICAL\>. Default: C\<%\{status\} !~ /OPEN/i\>.  You can use the following variables: C\<%\{status\}\>.  Example: C\<--critical-listener-status='%\{status\} !~ /UP/i'\>   |
| --warning-frontend-current-session-rate  |   Thresholds.                                                                                                                                                                                                                         |
| --critical-frontend-current-session-rate |   Thresholds.                                                                                                                                                                                                                         |
| --warning-frontend-max-session-rate      |   Thresholds.                                                                                                                                                                                                                         |
| --critical-frontend-max-session-rate     |   Thresholds.                                                                                                                                                                                                                         |
| --warning-frontend-current-sessions      |   Thresholds.                                                                                                                                                                                                                         |
| --critical-frontend-current-sessions     |   Thresholds.                                                                                                                                                                                                                         |
| --warning-frontend-total-sessions        |   Thresholds.                                                                                                                                                                                                                         |
| --critical-frontend-total-sessions       |   Thresholds.                                                                                                                                                                                                                         |
| --warning-frontend-max-sessions          |   Thresholds.                                                                                                                                                                                                                         |
| --critical-frontend-max-sessions         |   Thresholds.                                                                                                                                                                                                                         |
| --warning-frontend-traffic-in            |   Thresholds in b/s.                                                                                                                                                                                                                  |
| --critical-frontend-traffic-in           |   Thresholds in b/s.                                                                                                                                                                                                                  |
| --warning-frontend-traffic-out           |   Thresholds in b/s.                                                                                                                                                                                                                  |
| --critical-frontend-traffic-out          |   Thresholds in b/s.                                                                                                                                                                                                                  |
| --warning-frontend-denied-requests       |   Thresholds.                                                                                                                                                                                                                         |
| --critical-frontend-denied-requests      |   Thresholds.                                                                                                                                                                                                                         |
| --warning-frontend-denied-responses      |   Thresholds.                                                                                                                                                                                                                         |
| --critical-frontend-denied-responses     |   Thresholds.                                                                                                                                                                                                                         |
| --warning-frontend-errors-requests       |   Thresholds.                                                                                                                                                                                                                         |
| --critical-frontend-errors-requests      |   Thresholds.                                                                                                                                                                                                                         |
| --warning-listener-current-sessions      |   Thresholds.                                                                                                                                                                                                                         |
| --critical-listener-current-sessions     |   Thresholds.                                                                                                                                                                                                                         |
| --warning-listener-denied-requests       |   Thresholds.                                                                                                                                                                                                                         |
| --critical-listener-denied-requests      |   Thresholds.                                                                                                                                                                                                                         |
| --warning-listener-denied-responses      |   Thresholds.                                                                                                                                                                                                                         |
| --critical-listener-denied-responses     |   Thresholds.                                                                                                                                                                                                                         |
| --warning-listener-errors-requests       |   Thresholds.                                                                                                                                                                                                                         |
| --critical-listener-errors-requests      |   Thresholds.                                                                                                                                                                                                                         |
| --warning-listener-traffic-in            |   Thresholds in b/s.                                                                                                                                                                                                                  |
| --critical-listener-traffic-in           |   Thresholds in b/s.                                                                                                                                                                                                                  |
| --warning-listener-traffic-out           |   Thresholds in b/s.                                                                                                                                                                                                                  |
| --critical-listener-traffic-out          |   Thresholds in b/s.                                                                                                                                                                                                                  |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_haproxy_web.pl \
	--plugin=apps::haproxy::web::plugin  \
	--mode=backend-usage \
	--help
```

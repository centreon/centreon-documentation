---
id: applications-protocol-http
title: HTTP Server
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Monitoring Connector **HTTP Server** brings a host template:

* App-Protocol-HTTP-custom

It brings the following service templates:

| Service Alias         | Service Template                   | Service Description                         | Default |
|:----------------------|:-----------------------------------|:--------------------------------------------|:--------|
| HTTP-Expected-Content | App-Protocol-HTTP-Expected-Content | Check the presence of a string in a Webpage |         |
| HTTP-Json-Content     | App-Protocol-HTTP-Json-Content     | Check json content                          |         |
| HTTP-Response-Time    | App-Protocol-HTTP-Response-Time    | Check response time of a Wabpage            | X       |
| HTTP-Soap-Content     | App-Protocol-HTTP-Soap-Content     | Check soap content                          |         |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="HTTP-Expected-Content" label="HTTP-Expected-Content">

| Metric Name                | Unit  |
|:---------------------------|:------|
| content                    |       |
| http.extracted.value.count | count |
| http.content.size.bytes    | B     |
| http.response.time.seconds | s     |

</TabItem>
<TabItem value="HTTP-Json-Content" label="HTTP-Json-Content">

| Metric Name                | Unit  |
|:---------------------------|:------|
| http.response.time.seconds | s     |

</TabItem>
<TabItem value="HTTP-Response-Time" label="HTTP-Response-Time">

| Metric Name                                | Unit  |
|:-------------------------------------------|:------|
| http.response.connect.time.milliseconds    | ms    |
| http.response.processing.time.milliseconds | ms    |
| http.response.resolve.time.milliseconds    | ms    |
| http.response.size.count                   | B     |
| status                                     |       |
| http.response.time.seconds                 | s     |
| http.response.tls.time.milliseconds        | ms    |
| http.response.transfer.time.milliseconds   | ms    |

</TabItem>
<TabItem value="HTTP-Soap-Content" label="HTTP-Soap-Content">

| Metric Name                | Unit  |
|:---------------------------|:------|
| http.response.time.seconds | s     |

</TabItem>
</Tabs>

## Prerequisites

The target website or webapp should be accessible over HTTP/HTTPS from the poller. Specific option can be used
to specify a proxy when it is required.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the package on every Centreon poller expected to monitor **HTTP Server** resources:

```bash
yum install centreon-plugin-Applications-Protocol-Http
```

2. On the Centreon web interface, on page **Configuration > Monitoring Connector Manager**, install the **HTTP Server** Centreon Monitoring Connector.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the package on every Centreon poller expected to monitor **HTTP Server** resources:

```bash
yum install centreon-plugin-Applications-Protocol-Http
```

2. Install the **HTTP Server** Centreon Monitoring Connector RPM on the Centreon central server:

```bash
yum install centreon-pack-applications-protocol-http
```

3. On the Centreon web interface, on page **Configuration > Monitoring Connector Manager**, install the **HTTP Server** Centreon Monitoring Connector.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **HTTP Server** server settings.
* Apply the **App-Protocol-HTTP-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory   | Macro        | Description                                                                            |
|:------------|:-------------|:---------------------------------------------------------------------------------------|
|             | EXTRAOPTIONS | Any extra option you may want to add to every command line (eg. a --verbose flag)      |
|             | PORT         | (Default: '80')                                                                        |
|             | PROTOCOL     | (Default: 'http')                                                                      |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins/centreon_protocol_http.pl \
    --plugin=apps::protocols::http::plugin \
    --mode=response \
    --hostname=google.com \
    --http-backend=curl \
    --extra-stats \
    --use-new-perfdata
```

The expected command output is shown below:

```bash
OK: response time 0.078s | 'http.response.time.seconds'=0.078s;;;0; 'http.response.size.count'=49602B;;;0; 'http.response.resolve.time.milliseconds'=4.176ms;;;0; 'http.response.connect.time.milliseconds'=4.176ms;;;0; 'http.response.processing.time.milliseconds'=44.163ms;;;0; 'http.response.transfer.time.milliseconds'=4.176ms;;;0;
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_protocol_http.pl \
    --plugin=apps::protocols::http::plugin \
    --mode=soap-content \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_protocol_http.pl \
    --plugin=apps::protocols::http::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.

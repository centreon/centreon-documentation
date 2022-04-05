---
id: applications-ipfabric-api
title: IP Fabric API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack **IP Fabric API** brings a host template:

* App-Ipfabric-Api-custom

It brings the following service template:

| Service Alias     | Service Template                   | Service Description | Default |
|:------------------|:-----------------------------------|:--------------------|:--------|
| Path-Verification | App-Ipfabric-Path-Verification-Api | Check paths' status | X       |

### Discovery rules

The IP Fabric Plugin Pack includes a Host discovery provider to automatically discover network hosts registered in IP Fabric. 

![image](../../../assets/integrations/plugin-packs/procedures/applications-ipfabric-api-provider.png)

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Path-Verification" label="Path-Verification">

| Metric Name               | Unit  |
|:--------------------------|:------|
| total.path.all.count      | count |
| total.path.error.count    | count |
| total.path.none.count     | count |
| total.path.part.count     | count |
| total.path.mismatch.count | count |
| total.path.count          | count |
| *status*#status           |       |

</TabItem>
</Tabs>

## Prerequisites

Ensure you have a IP Fabric API Key with required privileges and IP Fabric's API address.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the plugin package on every Centreon poller expected to monitor **IP Fabric** resources:

```bash
yum install centreon-plugin-Applications-Ipfabric-Api
```

2. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **IP Fabric API** Centreon Plugin Pack.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the plugin package on every Centreon poller expected to monitor **IP Fabric** resources:

```bash
yum install centreon-plugin-Applications-Ipfabric-Api
```

2. Install the **IP Fabric API** Centreon Plugin Pack RPM on the Centreon central server:

```bash
yum install centreon-pack-applications-ipfabric-api
```

3. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **IP Fabric API** Centreon Plugin Pack.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **IP Fabric** server settings.
* Apply the **App-Ipfabric-Api-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory   | Macro        | Description                                                                            |
|:------------|:-------------|:---------------------------------------------------------------------------------------|
| X           | APIHOSTNAME  | IP Fabric's API address.                                                               |
| X           | APIKEY       | IP Fabric's API Key used to authenticate to IP Fabric API.                             |
|             | CUSTOMMODE   | (Default: 'api')                                                                       |
|             | DUMMYOUTPUT  | (Default: 'This is a dummy check')                                                     |
|             | DUMMYSTATUS  | (Default: 'OK')                                                                        |
|             | EXTRAOPTIONS | Any extra option you may want to add to every command\_line (eg. a --verbose flag)     |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_ipfabric_api.pl \
    --plugin=apps::ipfabric::plugin \
    --mode=path-verification \
    --custommode='' \
    --api-key='' \
    --hostname='' \
    --warning-status='' \
    --critical-status='%{expected_state} ne %{state}' \
    --warning-total-path='' \
    --critical-total-path='' \
    --warning-total-mismatch='' \
    --critical-total-mismatch='' \
    --warning-error-path='' \
    --critical-error-path='' \
    --warning-none-path='' \
    --critical-none-path='' \
    --warning-part-path='' \
    --critical-part-path='' \
    --warning-all-path='' \
    --critical-all-path='' \
    --http-backend=curl\
    --use-new-perfdata
```

The expected command output is shown below:

```bash
OK: Total number of paths: 10 Total mismatch: 0 Number of paths in All state: 8 Number of paths in Part state: 1 Number of paths in None state: 1 Number of paths in Error state: 0  | 'total.path.count'=10;;;0; 'total.path.mismatch.count'=0;;;0; 'total.path.all.count'=8;;;0; 'total.path.part.count'=1;;;0; 'total.path.none.count'=1;;;0; 'total.path.error.count'=0;;;0; 
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_ipfabric_api.pl \
    --plugin=apps::ipfabric::plugin \
    --mode=path-verification \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_ipfabric_api.pl \
    --plugin=apps::ipfabric::plugin \
    --list-mode
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../tutorials/troubleshooting-plugins.md#http-and-api-checks).
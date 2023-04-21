---
id: sc-warp10
title: Warp10
---

## How it works

Warp10 stream connector sends data to Warp10 using centreon neb events as a
source

## Compatibility

**to be determined**

## Installation

Login as `root` on the Centreon central server using your favorite SSH client.

Run the command according on your system:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install centreon-stream-connector-warp10
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install centreon-stream-connector-warp10
```

</TabItem>

<TabItem value="Debian 11" label="Debian_11">

```shell
apt install centreon-stream-connector-warp10
```

</TabItem>
</Tabs>

## Requirements and configuration

This stream connector needs the following configuration:

| Filter category |
| --------------- |
| Neb             |

| Path                                             |
| ------------------------------------------------ |
| /usr/share/centreon-broker/lua/export-warp10.lua |

| Parameter | type   | Example of value |
| --------- | ------ | ---------------- |
| logfile   | string | mylogfile.log    |
| ipaddr    | string | 192.168.0.6      |
| port      | number | yyyyy            |
| token     | string | xxxxxxxxxxxxxxx  |
| max\_size | number | 100              |

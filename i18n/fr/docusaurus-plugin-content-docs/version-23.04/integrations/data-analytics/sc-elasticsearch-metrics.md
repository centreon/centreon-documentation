---
id: sc-elastic-metrics
title: Elastic metrics
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## How it works

Elasticsearch metrics stream connector sends metrics related data to
Elasticsearch

## Compatibility

**to be determined**

## Installation

Connectez vous en tant que `root` sur le serveur Centreon central en utilisant votre client SSH préféré.

Lancer la commande adaptée à votre système :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install centreon-stream-connector-elasticsearch
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install centreon-stream-connector-elasticsearch
```

</TabItem>

<TabItem value="Debian 11" label="Debian_11">

```shell
apt install centreon-stream-connector-elasticsearch
```

</TabItem>
</Tabs>

## Requirements and configuration

This stream connecters needs the following configuration:

| Parameter       | type   | Example of value |
| --------------- | ------ | ---------------- |
| log-file        | string | mylogfile.log    |
| elastic-address | string | 192.168.0.2      |
| elastic-port    | number | 9200             |
| max-row         | number | 100              |

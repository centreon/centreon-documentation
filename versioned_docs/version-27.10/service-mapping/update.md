---
id: update
title: Update the extension
description: "Update the Centreon BAM extension package and interface module"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Update the package

To update the Centreon BAM module, run the following command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf update centreon-bam-server
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

```shell
dnf update centreon-bam-server
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

```shell
apt update && apt install --only-upgrade centreon-bam-server
```

</TabItem>
</Tabs>

## Update through the interface

Log on to the Centreon web interface and go to **Administration > Extensions > Manager**.

An update button is displayed when an update is available. Click it to update the module, then do the same for the widget.

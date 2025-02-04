---
id: update
title: Update the extension
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Update the package

In order to update the Centreon BAM module, execute the
following command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf update centreon-bam-server
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf update centreon-bam-server
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt update && apt install --only-upgrade centreon-bam-server
```

</TabItem>
</Tabs>

## Update through the interface

Log on to the Centreon web interface and go to `Administration > Extension >
Manager`.

Click on the orange button to update the module, do the same for the widget.

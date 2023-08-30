---
id: update
title: Update the extension
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The update of Centreon MBI is made of 2 steps :

- Updating the extension interface
- Updating the reporting server

## Update the extension interface

1. Update the package, run the following commands:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf clean all
dnf update centreon-bi-server
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf clean all
dnf update centreon-bi-server
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt clean all
apt-get --only-upgrade install centreon-bi\*
```

</TabItem>
</Tabs>

2. Update through the interface: Log on to the Centreon web interface, go to
the **Administration > Extension > Manager** page and click on the
Update button to update the extension and the widgets.

## Update the reporting server

Connect to your reporting server and stop the scheduler service (CBIS):

```shell
systemctl stop cbis
```

Then run the following commands: :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf clean all
dnf update centreon-bi\*
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf clean all
dnf update centreon-bi\*
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt clean all
apt-get --only-upgrade install centreon-bi\*
```

</TabItem>
</Tabs>

Start the scheduler service:

```shell
systemctl start cbis
```

MBI is now updated.

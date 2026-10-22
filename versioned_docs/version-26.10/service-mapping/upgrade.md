---
id: upgrade
title: Upgrade the extension
description: "Upgrade the Centreon BAM extension and its license"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Prerequisites

### Upgrade Centreon web on your central server

See the [corresponding chapter](../upgrade/introduction.md).

### Install the Business repository

If you are upgrading to a new major or minor version (i.e.: A.B.x with A or B that
changes), you need to install the new Business repository. You can find its address on the [support portal](https://support.centreon.com/hc/en-us/categories/10341239833105-Repositories).

### Update the RPM signing key

For security reasons, the keys used to sign Centreon RPMs are rotated regularly. If your platform still uses a previous key, go through the [key rotation procedure](../security/key-rotation.md#existing-installation) to remove the old key and install the new one.

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

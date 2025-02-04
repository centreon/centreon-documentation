---
id: upgrade
title: Upgrade the extension
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Prerequisites

### License

When upgrading from a version below 18.10 to one above 18.10, you must obtain
a new license from Centreon support.

### Upgrade Centreon web on your central server

See the [corresponding chapter](../upgrade/introduction.md).

### Install the Business repository

If you are upgrading to a new major or minor version (i.e.: A.B.x with A or B that
changes), you need to contact our Support service to retrieve the new
repository.

### Update the RPM signing key

For security reasons, the keys used to sign Centreon RPMs are rotated regularly. The last change occurred on October 14, 2021. When upgrading from an older version, you need to go through the [key rotation procedure](../security/key-rotation.md#existing-installation) to remove the old key and install the new one.

## Update the package

In order to update the Centreon BAM module using an RPM package, execute the
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
apt install --only-upgrade centreon-bam-server
```

</TabItem>
</Tabs>

## Update through the interface

Log on to the Centreon web interface and go to `Administration > Extension >
Manager`.

Click the orange button to update the module, and do the same for the widget.

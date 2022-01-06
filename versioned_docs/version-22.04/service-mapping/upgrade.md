---
id: upgrade
title: Upgrade the extension
---

> When upgrading from a version below 18.10 to one above 18.10, you must obtain
> a new license from Centreon support.

> If you're updating to a new major or minor version (i.e:A.B.x with A or B that
> changes) you need to contact our Support service to retrieve the new
> repository.

## Prerequisites

### Update the RPM signing key

For security reasons, the keys used to sign Centreon RPMs are rotated regularly. The last change occurred on October 14, 2021. When upgrading from an older version, you need to go through the [key rotation procedure](../security/key-rotation#existing-installation), to remove the old key and install the new one.

## Update the package

In order to update the Centreon BAM module using an RPM package, execute the
following command:

``` shell
yum update centreon-bam-server
```

## Update through the interface

Log on to the Centreon web interface and go to `Administration > Extension >
Manager`.

Click on the orange button to update the module, do the same for the widget.

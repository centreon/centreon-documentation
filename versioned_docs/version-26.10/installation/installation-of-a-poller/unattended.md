---
id: unattended-install-poller
title: Unattended installation of a poller
description: "Install a poller quickly using an unattended script"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To install a poller quickly, you can use a script.

This is useful when you need to install several pollers with identical settings, when you install from a deployment tool or CI pipeline, or when you have no interactive access to the target machine.

The script will perform all installation steps. You must then [register the poller](./using-packages.md#step-3-register-the-server), then [attach the poller to the central server or a remote server](../../monitoring/monitoring-servers/add-a-poller-to-configuration.md).

## Prerequisites

1. Update your system:

   <Tabs groupId="os">
   <TabItem value="RHEL 9" label="RHEL 9">

   ```shell
   dnf update
   subscription-manager register --username my_username --password my_password --auto-attach --force
   subscription-manager repos --enable codeready-builder-for-rhel-9-x86_64-rpms
   ```

   Replace **my_username** and **my_password** with your Red Hat account credentials.

   </TabItem>
   <TabItem value="Alma / Oracle Linux 9" label="Alma / Oracle Linux 9">

   ```shell
   dnf update
   ```

   </TabItem>
   <TabItem value="RHEL 10" label="RHEL 10">

   ```shell
   dnf update
   subscription-manager register --username my_username --password my_password --auto-attach --force
   subscription-manager repos --enable codeready-builder-for-rhel-10-x86_64-rpms
   ```

    Replace **my_username** and **my_password** with your Red Hat account credentials.

   </TabItem>
   <TabItem value="Alma / Oracle Linux 10" label="Alma / Oracle Linux 10">

   ```shell
   dnf update
   ```

   </TabItem>
   <TabItem value="Debian 13" label="Debian 13">

   ```shell
   apt update && apt upgrade
   ```

   </TabItem>
   </Tabs>

2. Download the script:

   ```shell
   curl -L https://download.centreon.com/26.10/unattended.sh --output /tmp/unattended.sh
   ```

## Installation procedure

1. Run the following command as **root**:

   ```shell
   bash /tmp/unattended.sh install -t poller -v 26.10 -r stable -l DEBUG  2>&1
   ```

   The script writes a full log, including any errors, to `/var/log/centreon-unattended-<date>.log`.

2. Once the script has run, [register the poller](./using-packages.md#step-3-register-the-server), then [attach the poller to the central or a remote server](../../monitoring/monitoring-servers/add-a-poller-to-configuration.md).

## Help

To get help on the script, use the following command:

```shell
bash unattended.sh -h
```

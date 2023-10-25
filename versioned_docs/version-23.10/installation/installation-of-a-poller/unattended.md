---
id: unattended-install-poller
title: Unattended installation of a poller
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To install a poller quicker, you can use a script. This will perform all installation steps. You must then register the poller and attach it to the central server or the remote server.

## Installation procedure

1. Update your system:

<Tabs groupId="sync">
<TabItem value="RHEL 8" label="RHEL 8">

```shell
dnf update
subscription-manager register --username my_username --password my_password --auto-attach --force
subscription-manager repos --enable codeready-builder-for-rhel-8-x86_64-rpms
```

> Replace **my_username** and **my_password** with the credentials of your RedHat account.

</TabItem>

<TabItem value="Alma / Oracle Linux 8" label="Alma / Oracle Linux 8">

```shell
apt update && apt upgrade
```

</TabItem>
<TabItem value="RHEL 9" label="RHEL 9">

```shell
dnf update
subscription-manager register --username my_username --password my_password --auto-attach --force
subscription-manager repos --enable codeready-builder-for-rhel-9-x86_64-rpms
```

</TabItem>
<TabItem value="Alma / Oracle Linux 9" label="Alma / Oracle Linux 9">

```shell
dnf update
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt update
```

</TabItem>
</Tabs>

2. Download the script using the following command:

```shell
curl -L https://raw.githubusercontent.com/centreon/centreon/23.10.x/centreon/unattended.sh | -o /tmp/unattended
```

3. Run the following command as **root**:

```shell
bash unattended.sh install -t poller -v 23.10 -r stable -l DEBUG  2>&1 |tee -a /tmp/unattended-$(date +"%m-%d-%Y-%H%M%S").log
```

  You will get a full log file with all errors in your **tmp** folder, named **unattended(date).log**.

3. Once the script has run, carry out [steps 3 to 5 of the standard installation procedure for a poller](./using-packages.md#step-3-register-the-server).

## Help

To get help on the script, use the following command:

```shell
bash unattended.sh -h
```

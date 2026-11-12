---
id: poller-update-upgrade
title: Updating/upgrading a poller
description: "How to update or upgrade a poller to the latest minor or major version using the install command, then deploy its configuration and restart Gorgone"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> **IMPORTANT**: It is the customer's responsibility to [update the OS of the poller's host machine](https://thewatch.centreon.com/product-how-to-21/os-updates-security-3136). Also, Centreon provides application updates for pollers, but it is the customer’s responsibility to apply these updates to their pollers.

Currently, there is no need to upgrade pollers running version 25.10. Just update them to the latest minor 25.10 version.

## Update a poller to the latest 25.10 version


<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

1. Clean the cache:

  ```shell
  dnf clean all --enablerepo=*
  ```

2. Then upgrade all the components with the following command:

  ```shell
  dnf update centreon\* --exclude=centreon-plugin*
  ```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

1. Clean the cache:

  ```shell
  dnf clean all --enablerepo=*
  ```

2. Then upgrade all the components with the following command:

  ```shell
  dnf update centreon\* --exclude=centreon-plugin*
  ```

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

1. Clean the cache:

  ```shell
  apt clean
  apt update
  ```

2. Then upgrade all the components with the following command:

  ```shell
  apt-get update && apt-mark hold centreon-plugin* && apt-get install --only-upgrade 'centreon*'
  ```

</TabItem>
</Tabs>

  > Accept the new GPG keys from the repositories as needed.

3. Deploy the Poller's configuration from the Centreon web UI by following [this
procedure](../monitoring/monitoring-servers/deploying-a-configuration.md),
and choose the **Restart** method for the Engine process.

4. Finally, restart the Gorgone service if it is used on the Poller:

  ```shell
  systemctl restart centengine gorgoned
  ```

5. Run the following command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

Nothing to do for this OS.

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

Nothing to do for this OS.

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

  ```shell
  apt-mark unhold centreon-plugin*
  ```

</TabItem>
</Tabs>
---
id: poller-update-upgrade
title: Updating/upgrading a poller
description: "How to update or upgrade a poller to the latest minor or major version using the install command"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> **IMPORTANT**: It is the customer's responsibility to [update the OS of the poller's host machine](https://thewatch.centreon.com/product-how-to-21/os-updates-security-3136). Also, Centreon provides application updates for pollers, but it is the customer’s responsibility to apply these updates to their pollers.

Currently, there is no need to upgrade pollers running version 25.10. Just update them to the latest minor 25.10 version.

## Update a poller to the latest 25.10 version

1. Clean the cache:

  ```shell
  dnf clean all --enablerepo=*
  ```

2. Then upgrade all the components with the following command:

  ```shell
  dnf update centreon\* --exclude=centreon-plugin*
  ```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

1. Clean the cache:

  ```shell
  dnf clean all --enablerepo=*
  ```

2. Then upgrade all the components with the following command:

  ```shell
  dnf update centreon\* --exclude=centreon-plugin*
  ```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

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
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

Nothing to do for this OS.

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

Nothing to do for this OS.

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

  ```shell
  apt-mark unhold centreon-plugin*
  ```

</TabItem>
</Tabs>

</TabItem>
</Tabs>


<!-- Your poller should always be in the latest available version (i.e. in the latest minor version of the latest major version). Currently, the only exception is pollers on Alma/RHEL/Oracle Linux 8, which only need to be updated to the latest minor version. Read the table below carefully before you do anything.

| If your poller runs on... | What to do |
|---|---|
| Alma/RHEL/Oracle Linux 8 | Do not use the procedure below. Run `dnf update` on your poller to get the latest 25.10 version. |
| Alma/RHEL/Oracle Linux 9 | Use the procedure below. |
| Debian 12 | [Upgrade to Debian 13](https://thewatch.centreon.com/infra-monitoring-product-how-to-21/migrating-from-debian-12-to-debian-13-on-the-same-server-while-upgrading-centreon-to-version-26-10-5985), then upgrade your poller to version 26.10. |

* If your poller is already in the latest major version but not in its latest minor version, performing this procedure will update it to the latest minor version. Example: if the latest version is 26.10.y and your poller is in version 26.10.x, then it will be updated to 26.10.y.
* If your poller is in another major version than the latest, this procedure will not update it to the latest minor version of this major version. The poller will be upgraded to the latest minor version of the latest major version available instead (e.g. it will be upgraded from 25.10.x to 26.10.y).

## Updating or upgrading a poller installed on Alma/RHEL/Oracle Linux 9

1. In the interface of the central server, go to **Configuration > Pollers > Pollers**.
2. In the list of pollers, find the poller you want to update or upgrade, then click **Copy installation command** in the **Actions** column. The icon changes to a green tick once the command is copied to your clipboard.
3. On your poller, in your terminal, paste the command and execute it. If you are warned that the poller already exists, choose option 1, **Update the existing poller**.
4. [Deploy the poller's configuration](../monitoring/monitoring-servers/deploying-a-configuration.md),
and choose the **Restart** method for the Engine process.
5. Finally, restart the Gorgone service if it is used on the poller:

    ```shell
    systemctl restart gorgoned
    ``` -->
  
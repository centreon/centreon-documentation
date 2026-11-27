---
id: archived-repos
title: Repositories for archived versions
description: "Reference for the archived package repositories for Centreon 22.04 to 24.04 on EL or Debian, to update an end-of-life platform before you upgrade or migrate it."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

When a version of Centreon reaches its end of life, its packages are moved to the archived repositories at `https://packages.centreon.com/archives/`. If your platform runs one of these versions, use the archived repositories to:

* update your platform to the latest minor release of its version, before you upgrade or migrate it,
* upgrade your platform through intermediate versions.

The following versions are available in the archived repositories: 22.04, 22.10, 23.04, 23.10 and 24.04.

> Versions older than 22.04 are not available in the archived repositories. If your platform runs one of these versions, [contact Centreon support](https://support.centreon.com/).

> If you use Business extensions, visit the [support portal](https://support.centreon.com/hc/en-us/categories/10341239833105-Repositories) to get the address of the Business repository for your version.

<Tabs groupId="sync">
<TabItem value="EL" label="EL">

The repository files have the following URL format:

```text
https://packages.centreon.com/archives/repo-files/standard/rpm/<version>/<os>/centreon-<version>.repo
```

| Centreon version | Supported OSs                                                    | Value of `<os>` |
| ---------------- | ---------------------------------------------------------------- | --------------- |
| 22.04, 22.10     | CentOS 7, RHEL/Oracle Linux 7                                    | `el7`           |
|                  | RHEL/Oracle Linux/AlmaLinux 8                                    | `el8`           |
| 23.04, 23.10, 24.04 | RHEL/Oracle Linux/AlmaLinux 8                                 | `el8`           |
|                  | RHEL/Oracle Linux/AlmaLinux 9                                    | `el9`           |

Each repository file already points to the correct GPG key and includes the plugins repository.

For example, to add the repository for Centreon 22.10 on EL8:

```shell
dnf config-manager --add-repo https://packages.centreon.com/archives/repo-files/standard/rpm/22.10/el8/centreon-22.10.repo
dnf clean all --enablerepo=*
```

On CentOS 7 and RHEL/Oracle Linux 7, use `yum-config-manager` instead of `dnf config-manager`, and `yum` instead of `dnf`.

</TabItem>
<TabItem value="Debian" label="Debian">

> Debian was not supported in Centreon versions older than 22.04.

The repository files have the following URL format:

```text
https://packages.centreon.com/archives/repo-files/standard/apt/<version>/<codename>/centreon-<version>.list
```

| Centreon version | Available OSs (`<codename>`)               |
| ---------------- | ------------------------------------------ |
| 22.04            | Debian 11 (bullseye)                       |
| 22.10            | Debian 11 (bullseye)                       |
| 23.04            | Debian 11 (bullseye)                       |
| 23.10            | Debian 11 (bullseye)                       |
| 24.04            | Debian 11 (bullseye), Debian 12 (bookworm) |

For example, to add the repository for Centreon 23.10 on Debian 11:

1. Download the repository file to the **/etc/apt/sources.list.d/** directory:

   ```shell
   wget -O /etc/apt/sources.list.d/centreon-23.10.list https://packages.centreon.com/archives/repo-files/standard/apt/23.10/bullseye/centreon-23.10.list
   ```

2. Download the key of the archived repositories:

   ```shell
   wget -O /usr/share/keyrings/centreon-archives.asc https://packages.centreon.com/archives/repo-files/apt/centreon-archives-apt.asc
   ```

3. From Centreon 23.04, the archived repositories do not contain the plugins, and some packages that Centreon Gorgone needs. Add the current plugins repository and import its key:

   ```shell
   echo "deb https://packages.centreon.com/apt-plugins-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon-plugins.list
   wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1
   ```

4. Update the list of packages:

   ```shell
   apt update
   ```

</TabItem>
</Tabs>

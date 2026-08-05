---
id: offline
title: Offline installation
description: "Install Centreon on servers without internet access using a local mirror"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To be able to install Centreon on servers with no internet access, create a local copy of the Centreon repository on a server that has an internet access, and then make your offline Centreon servers point to it.

## Creating a local copy of the Centreon repository

1. Install the repository on your mirror server.

<Tabs groupId="os">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install -y dnf-plugins-core
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/24.10/el8/centreon-24.10.repo
dnf clean all --enablerepo=*
dnf update
```

Then retrieve the gpg key for the packages:

```shell
rpm --import https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install -y dnf-plugins-core
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/24.10/el9/centreon-24.10.repo
dnf clean all --enablerepo=*
dnf update
```

Then retrieve the gpg key for the packages:

```shell
rpm --import https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
```

</TabItem>
</Tabs>

2. Create a directory for the local repository:

   ```shell
   mkdir -p /var/www/html/repos/centreon
   ```

3. Install the required packages:

   ```shell
   yum install yum-utils createrepo httpd
   ```

4. Synchronize the repositories:

   ```shell
   reposync -p /var/www/html/repos/centreon/ -r centreon-stable-noarch
   reposync -p /var/www/html/repos/centreon/ -r centreon-stable
   ```

5. Create the repository:

   ```shell
   createrepo /var/www/html/repos/centreon/
   ```

6. Start the web server:

   ```shell
   service httpd start
   ```

7. On your Centreon server, edit the following file:

   ```shell
   vi /etc/yum.repos.d/centreon.repo
   ```

   Add the following lines:

   ```shell
   [centreon]
   name=centreon
   baseurl=http://<mirror_ip_address>/repos/centreon
   gpgcheck=1
   enabled=1
   ```

   > Replace `<mirror_ip_address>` with the actual address of your local repository.

## Keeping your local repository up to date

To synchronize your mirror with the Centreon repository regularly, create a cron file:

```shell
cd  /var/spool/cron
crontab -e
```

The following commands will schedule a synchronization every day at 2 for the **centreon-stable-noarch** repository, and every day at 3 for the **centreon-stable** repository:

```shell
* 2 * * * reposync -p /var/www/html/repos/centreon/ -r centreon-stable-noarch
* 3 * * * reposync -p /var/www/html/repos/centreon/ -r centreon-stable
```

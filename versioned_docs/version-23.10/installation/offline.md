---
id: offline
title: Offline installation
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To be able to install Centreon on servers with no internet access, create a local copy of the Centreon repository on a server that has an internet access, and then make your offline Centreon servers point to it.

## Creating a local copy of the Centreon repository

1. Install the repository on your mirror server.

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install -y dnf-plugins-core
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/23.10/el8/centreon-23.10.repo
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
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/23.10/el9/centreon-23.10.repo
dnf clean all --enablerepo=*
dnf update
```

Then retrieve the gpg key for the packages:

```shell
rpm --import https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

To install the Centreon repository, execute the following command:

```shell
echo "deb https://packages.centreon.com/apt-standard-23.10-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon.list
echo "deb https://packages.centreon.com/apt-plugins-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon-plugins.list
```

Then import the repository key:

```shell
wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1
apt update
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

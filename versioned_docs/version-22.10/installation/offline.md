---
id: offline
title: Offline installation
---

To be able to install Centreon on servers with no internet access, create a local copy of the Centreon repository on a server that has an internet access, then make your offline Centreon servers point to it.

## Creating a local copy of the Centreon repository

1. Install **centreon-release** on your mirror server.

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install -y https://yum.centreon.com/standard/22.10/el8/stable/noarch/RPMS/centreon-release-22.10-1.el8.noarch.rpm
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install -y https://yum.centreon.com/standard/22.10/el7/stable/noarch/RPMS/centreon-release-22.10-1.el7.centos.noarch.rpm
```

</TabItem>
</Tabs>

2. Retrieve the gpg key for the packages:

   ```shell
   rpm --import https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
   ```

3. Create a directory for the local repository:

   ```shell
   mkdir -p /var/www/html/repos/centreon
   ```

4. Install the required packages:

   ```shell
   yum install yum-utils createrepo httpd
   ```

5. Synchronize the repositories:

   ```shell
   reposync -p /var/www/html/repos/centreon/ --repo centreon-stable-noarch
   reposync -p /var/www/html/repos/centreon/ --repo centreon-stable
   ```

6. Create the repository:

   ```shell
   createrepo /var/www/html/repos/centreon/
   ```

7. Start the web server:

   ```shell
   service httpd start
   ```

8. On your Centreon server, edit the following file:

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

   > Replace `<mirror_ip_address>` by the actual address of your local repository.

## Keeping your local repository up-to-date

To synchronize regularly your mirror with the Centreon repository, create a cron file:

```shell
cd  /var/spool/cron
crontab -e
```

The following commands will schedule a synchronization every day at 2 for the **centreon-stable-noarch** repository, and every day at 3 for the **centreon-stable** repository :

```shell
* 2 * * * reposync -p /var/www/html/repos/centreon/ -r centreon-stable-noarch
* 3 * * * reposync -p /var/www/html/repos/centreon/ -r centreon-stable
```

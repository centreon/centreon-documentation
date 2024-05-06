---
id: update-centreon-ha
title: Updating a Centreon-HA platform
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This procedure is intended to be used to perform minor updates of Centreon when Engine/Broker compatibility between the old version and the new version is assured. No service downtime is necessary in this case; only a short outage of the Web UI login screen.

## Suspend cluster resource management

In order to avoid a failover of the cluster during the update, it is necessary to unmanage all Centreon resources, as well as MariaDB.

```bash
pcs property set maintenance-mode=true
```

## Update process from the WUI

> Make sure all users are logged out of the Centreon web interface
> before starting the upgrade procedure.

### Centreon-Web update

Update your cluster by running the following command on each central node:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

Clean the cache :

```shell
dnf clean all --enablerepo=*
```

Update all components:

```shell
dnf update centreon\*
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

Clean the cache :

```shell
dnf clean all --enablerepo=*
```

Update all components:

```shell
dnf update centreon\*
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

Clean the cache :

```shell
apt clean all
apt update
```

Update all components:

```shell
apt install --only-upgrade centreon\*
```

</TabItem>
</Tabs>

Once the package updates have been completed on both central servers, all that remains is to apply the update via the web interface **only on the active node** by closing the current session or refreshing the login page or by API [as shown here](https://docs.centreon.com/docs/update/update-centreon-platform/#update-the-centreon-central-server).

On the **passive central node**, you must move the **"install" directory** and regenerate the Symfony cache to avoid displaying the update interface again following a switchover.

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
mv /usr/share/centreon/www/install /var/lib/centreon/installs/install-update-`date +%Y%m%d`
sudo -u apache /usr/share/centreon/bin/console cache:clear
```
</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
mv /usr/share/centreon/www/install /var/lib/centreon/installs/install-update-`date +%Y%m%d`
sudo -u apache /usr/share/centreon/bin/console cache:clear
```
</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
mv /usr/share/centreon/www/install /var/lib/centreon/installs/install-update-`date +%Y%m%d`
sudo -u www-data /usr/share/centreon/bin/console cache:clear
```
</TabItem>
</Tabs>

### Removing cron jobs

The RPM upgrade restores the unnecessary cron jobs that were deleted during the installation procedure. Remove them on the two central nodes to avoid concurrent executions:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
rm -f /etc/cron.d/centreon
rm -f /etc/cron.d/centstorage
rm -f /etc/cron.d/centreon-auto-disco
systemctl restart crond
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
rm -f /etc/cron.d/centreon
rm -f /etc/cron.d/centstorage
rm -f /etc/cron.d/centreon-auto-disco
systemctl restart crond
```
</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
rm -f /etc/cron.d/centreon
rm -f /etc/cron.d/centstorage
rm -f /etc/cron.d/centreon-auto-disco
systemctl restart cron
```
</TabItem>
</Tabs>

### Updating Centreon extensions

The Centreon extensions are also updated *via* the WUI, from the "Administration > Extensions > Manager" menu, by clicking the "Update all" button.

### Updating the Monitoring Connectors

In order to maintain compatibility between the [Monitoring Connectors](https://docs.centreon.com/docs/monitoring/pluginpacks/) and the installed plugins (that have just been updated on the central server), the Monitoring Connectors must also be updated in the WUI from the **Configuration > Monitoring Connector Manager** menu.

### Exporting Engine/Broker configuration

Generate and export new Engine/Broker configuration files for all pollers (central included) in **Configuration > Pollers** with these options checked:

* Generate Configuration Files
* Run monitoring engine debug (-v)
* Move Export Files

Then restart them **one at a time** from the same menu and make sure to select the **"Restart" method, not "Reload"**, if the `centreon-engine` and/or `centreon-broker` packages have been updated.

In addition, the `cbd-sql` service must be restarted **on the central master server**:

```bash
service cbd-sql restart
```

The `cbd` service must also be restarted on [Centreon Remote Servers](https://docs.centreon.com/docs/23.10/installation/architectures/#distributed-architecture):

```bash
service cbd restart
```

## Resuming cluster resource management

Now that the update is finished, the resources can be managed again:

```bash
pcs property set maintenance-mode=false
pcs resource cleanup ms_mysql
```

## Verifying platform stability

You should now check that everything works fine:

* Access to the web UI menus.
* Poller configuration generation + reload and restart method.
* Schedule an immediate check (Central + Pollers) and acknowledge, downtime etc.
* Move resources or reboot the master server and check again that everything is fine.

## Updating the pollers

Pollers can then be updated by following the [procedure indicated here](https://docs.centreon.com/docs/update/update-centreon-platform/#update-the-pollers).

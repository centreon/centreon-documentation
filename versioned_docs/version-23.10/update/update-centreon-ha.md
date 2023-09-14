---
id: update-centreon-ha
title: Updating Centreon-HA platform
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This procedure is intended to be used to perform minor updates of Centreon when  Engine/Broker compatibility between the old version and the new version is assured. No service downtime is necessary in this case; only a short outage of the Web UI login screen.

## Suspend cluster resource management

In order to avoid a failover of the cluster during the update, it is necessary to unmanage all Centreon resources, as well as MariaDB.

```bash
pcs resource unmanage centreon
pcs resource unmanage ms_mysql
```

## Update process from the WUI

> Please make sure all users are logged out of the Centreon web interface
> before starting the upgrade procedure.

### Centreon-Web update

Update your cluster by running the following command on each node:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf update
```

</TabItem>
</Tabs>

And then you should be able to finalize the update *via* the web UI. You might have to log off your session or refresh the login page to access the update process.

On the slave central node, just move the "install" dir to avoid getting the "update" screen in the WUI in the event of a further exchange of roles.

```bash
mv /usr/share/centreon/www/install /var/lib/centreon/installs/install-update-YYYY-MM-DD
sudo -u apache /usr/share/centreon/bin/console cache:clear
```

### Removing cron jobs

The RPM upgrade puts the cron job back in place. Remove them to avoid concurrent executions: 

```bash
rm /etc/cron.d/centreon
rm /etc/cron.d/centstorage
rm /etc/cron.d/centreon-auto-disco
```

### Updating Centreon extensions

The Centreon extensions are also updated *via* the WUI, from the "Administration > Extensions > Manager" menu, by clicking the "Update all" button.

### Updating the Monitoring Connectors

In order to maintain compatibility between the [Monitoring Connectors](../monitoring/pluginpacks.md) and the installed plugins (that have just been updated by the `yum update` command on the central server), the Monitoring Connectors must also be updated in the WUI from the **Configuration > Monitoring Connectors Manager** menu.

### Updating the pollers

We recommend that you also update the pollers, **especially if `centreon-engine` and/or `centreon-broker` packages have been updated**:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf update
```

</TabItem>
</Tabs>

### Exporting Engine/Broker configuration

Generate and export new Engine/Broker configuration files for all pollers (central included) in "Configuration -> Pollers" with these options checked:

* Generate Configuration Files
* Run monitoring engine debug (-v)
* Move Export Files

Then restart them **one at a time** from the same menu and make sure to select the **"restart" method, not "reload"**, if the `centreon-engine` and/or `centreon-broker` packages have been updated.

In addition, the `cbd-sql` service must be restarted **on the central master server**:

```bash
service cbd-sql restart
```

The `cbd` service must also be restarted on [Centreon Remote Servers](../installation/architectures.md#description):

```bash
service cbd restart
```

At this point everything should be working properly.

## Resuming cluster resource management

Now that the update is finished, the resources can be managed again:

```bash
pcs resource manage centreon
pcs resource manage ms_mysql
```

## Verifying platform stability

You should now check that everything works fine:

* Access to the web UI menus.
* Poller configuration generation + reload and restart method.
* Schedule an immediate check (Central + Pollers) and acknowledge, downtime etc.
* Move resources or reboot the master server and check again that everything is fine.


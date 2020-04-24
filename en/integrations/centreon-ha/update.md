---
id: update
title: Updating Centreon-HA platform
---

This procedure is intended to be used to perform minor updates of Centreon, when the Engine/Broker compatibility is assured between the old and the new version. No service downtime is necessary in this case, only a short outage of the Web UI login screen.

## Suspend cluster resources management

In order to avoid a failover of the cluster during the update, it is necessary to unmanage all Centreon resources, as well as MariaDB.

```bash
pcs resource unmanage centreon
pcs resource unmanage ms_mysql
```

## Update process from the WUI

### Centreon-Web update

Update your cluster by running the following command on each node:

```bash
yum update
```

And then you should be able to finalize the update *via* the web UI. You might have to log off your session or to refresh the login page to access the update process.

On the slave central node, just move the "install" dir to avoid getting the "update" screen in the WUI in the event of a further exchange of roles.

```bash
mv /usr/share/centreon/www/install /var/lib/centreon/installs/install-update-YYYY-MM-DD
```

### Updating Centreon extensions

The Centreon extensions are also to be updated *via* the WUI, from the "Administration > Extensions > Manager" menu by clicking the "Update all" button.

### Updating the Plugin Packs

In order to maintain compatibility between the [Plugin Packs](../../monitoring/pluginpacks) and the installed plugins (that have just been updated by the `yum update` command on the central server), the plugin packs must be updated in the WUI too from the "Configuration > Plugin Packs" menu.

### Updating the pollers

It is recommended to update the pollers as well, **especially if `centreon-engine` and/or `centreon-broker` packages have been updated**:

```bash
yum update
```

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

The `cbd` service must also be restarted on [Centreon Remote Servers](../../installation/architectures#description) as well:

```bash
service cbd restart
```

At this point everything should be working properly.

## Resuming the cluster resources management

Now that the update is finished, the resources can be managed again:

```bash
pcs resource manage centreon
pcs resource manage ms_mysql
```

## Verifying the platform stability

You should now check that eveything works fine:

* Access to the web UI menus.
* Poller configuration generation + reload and restart method.
* Schedule immediate check (Central + Pollers) and acknowledge, downtime etc.
* Move resources or reboot master server and check again that everything is fine.


---
id: administration
title: Administration
---

## Update

To update the module, run the following command:

```shell
yum update centreon-auto-discovery-server
```

If an update is available, you will be asked for a confirmation. Just answer *yes* to the question.

Connect to the Centreon’s web interface using an account allowed to administer products and go to the
**Administration > Extensions > Manager menu**.

Click on the update icon corresponding to the **Centreon Auto Discovery** module:

![image](assets/configuration/autodisco/update.png)

The module is now updated:

![image](assets/configuration/autodisco/list_modules.png)

## Uninstallation

Connect to the Centreon’s web interface using an account allowed to administer products and go to the
**Administration > Extensions > Manager** menu.

Click on the delete icon corresponding to the **Centreon Auto Discovery** module:

![image](assets/configuration/autodisco/list_modules.png)

A confirmation popup will appear, confirm the action:

![image](assets/configuration/autodisco/uninstall.png)

The module is now uninstalled:

![image](assets/configuration/autodisco/install.png)

> Uninstalling the module will also remove all the associated data. Data won't be restorable unless a database backup
> has been made.

## Scheduled job

All the active discovery rules are periodically executed through a scheduled job managed by the *cron* daemon. The
execution's description is available into the **/etc/cron.d/centreon-auto-disco** file:

```shell
#####################################
# Centreon Auto Discovery
#

30 22 * * * centreon /usr/share/centreon/www/modules/centreon-autodiscovery-server//cron/centreon_autodisco --config='/etc/centreon/conf.pm' --config-extra='/etc/centreon/centreon_autodisco.pm' --severity=error >> /var/log/centreon/centreon_auto_discovery.log 2>&1
```

The default configuration runs the discovery every day at 10:30 PM.

Information and errors relative to the execution will be saved into the **/var/log/centreon/centreon_auto_discovery.log** file.

## Configuring the discovery engine

Here is an example of a complete possible configuration of the
**/etc/centreon/centreon_autodisco.pm** file:

```perl
%centreon_autodisco_config = (
    internal_com_type => 'ipc',
    internal_com_path => '/tmp/centreonautodisco/routing.ipc',
    # Execute rules in parallel (0) or sequential (1)
    sequential => 1,
    timeout_wait => 60,
    # Use to connect to a Centreon poller
    ssh_password => '',
    ssh_extra_options => {
        user => 'centreon',
        stricthostkeycheck => 0,
        sshdir => '/var/www/.ssh/',
        knownhosts => '/dev/null',
        timeout => 60,
    },
    ssh_exec_options => {
        timeout => 60,
        timeout_no_data => 120,
        parallel => 8, #Max.: 8
    },
    # Centreon CLAPI parameters
    clapi_cmd => '/usr/bin/centreon',
    clapi_user => 'admin',
    clapi_password => 'centreon',
    clapi_reload => 'POLLERRELOAD',
    # Parameters to send email report if enable in rule
    mail_subject => 'Centreon Auto Discovery',
    mail_from => 'centreon-autodisco',
    mail_command => '/bin/mail',
);

1;
```

## Distributed architecture

When a host is monitored by a remote collector, the discovery will be made from
it. Thus to executed distant commands it is necessary to allow the Apache process
to access the **centreon** SSH keys user. To do this run the following commands:

```shell
mkdir /var/www/.ssh/
cp /var/spool/centreon/.ssh/* /var/www/.ssh/
chown -R apache. /var/www/.ssh
chmod 600  /var/www/.ssh/id_rsa
```

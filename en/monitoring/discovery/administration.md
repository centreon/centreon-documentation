---
id: administration
title: Administration
---

## Update

> When upgrading to 20.04, all data of **Host Discovery** feature will be lost:
>
> - Discovery tasks,
> - Saved parameters/credentials.
>
> This is due to the new hardened way credentials are stored in this version.
>
> Discovered hosts through those tasks will remain.

To update the module, run the following command:

``` shell
yum update -y centreon-auto-discovery-server
```

Connect to the Centreon’s web interface using an account allowed to administer
products and go to the `Administration > Extensions > Manager` menu.

> Make sure that **License Manager** and **Plugin Packs Manager** modules are
> up-to-date before updating **Auto Discovery** module.

Click on the update icon corresponding to the **Auto Discovery**
module:

![image](../../assets/monitoring/discovery/update.png)

The module is now updated:

![image](../../assets/monitoring/discovery/install-after.png)

## Uninstallation

Connect to the Centreon’s web interface using an account allowed to administer
products and go to the `Administration > Extensions > Manager` menu.

Click on the delete icon corresponding to the **Auto Discovery**
module:

![image](../../assets/monitoring/discovery/install-after.png)

A confirmation popup will appear, confirm the action:

![image](../../assets/monitoring/discovery/uninstall-popin.png)

The module is now uninstalled:

![image](../../assets/monitoring/discovery/install-before.png)

> Uninstalling the module will also remove all the associated data. Data won't
> be restorable unless a database backup has been made.

## Hosts discovery

### Gorgone module configuration

The **Auto Discovery** module brings a specific configuration for the Gorgone
service on the Central server. The default configuration is
`/etc/centreon-gorgone/config.d/41-autodiscovery.yaml`.

A maximum duration for discovery jobs is set globally. If its necessary to
change it (large subnet SNMP discovery for example), edit the configuration and
add the *global_timeout* directive.

Example of configuration:

```yaml
gorgone:
  modules:
    - name: autodiscovery
      package: "gorgone::modules::centreon::autodiscovery::hooks"
      enable: true
      check_interval: 15
      global_timeout: 300
```

> Be sure to restart Gorgone service after any configuration modification:
>
> ```shell
> systemctl restart gorgoned
> ```

### Distributed architecture

The hosts discovery relies on Gorgone to perform discoveries on both Central
and Remote Server or Pollers.

> It is necessary to have a ZMQ communication between the Central server and a
> Remote Server to perform a discovery on a Poller attached to this Remote
> Server.
>
> Look at the section presenting the differente [communication
> types](../monitoring-servers/communications.html) to know more.

## Services discovery

The **Auto Discovery** module for services discovery contains 3 parts:

  - The web UI: rules creation, administration and exploitation of the module,
  - Discovery plugins,
  - Scheduled job (cron) which executes discovery rules.

The discovery plugins look for new elements to monitor, see *[Discovery
plugins](services-discovery.html#discovery-plugins)* for more
detail.

The rules, managed through the web UI, are saved into **Centreon**'s database
and are executed periodically (every night at 10:30 PM) by the *cron* jon. See
[Scheduled job](#scheduled-job) pour more detail.

The following figure describes the general functioning of this module:

![image](../../assets/monitoring/discovery/services-discovery-schema.png)

### Scheduled job

All the active discovery rules are periodically executed through a scheduled job
managed by the *cron* daemon. The execution's description is available into the
**/etc/cron.d/centreon-auto-disco** file:

``` shell
#####################################
# Centreon Auto Discovery
#

30 22 * * * centreon /usr/share/centreon/www/modules/centreon-autodiscovery-server//cron/centreon_autodisco.pl --config='/etc/centreon/conf.pm' --config-extra='/etc/centreon/centreon_autodisco.pm' --severity=error >> /var/log/centreon/centreon_service_discovery.log 2>&1
```

The default configuration runs the discovery every day at 10:30 PM.

Information and errors relative to the execution will be saved into the
**/var/log/centreon/centreon\_service_\_discovery.log** file.

### Configuring the discovery engine

Here is an example of a complete possible configuration of the
**/etc/centreon/centreon\_autodisco.pm** file:

``` perl
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

> The *clapi_user* and *clapi_password* directives might be changed to adapt to
> an *admin* user crendentials needed for services creation and configuration
> reloading.

### Distributed architecture

The service discovery still uses the SSH communication between Central server
and Remote Server or Poller when the discovery concerns a host monitored from
those Remote Server or Poller.

We must be sure that SSH keys are created for **centreon** user.

#### Create and exchange SSH keys

If you do not have any private SSH keys on the **Central server** for the
**centreon** user, create one with the following commands:

``` shell
su - centreon
ssh-keygen -t rsa
```

> Hit enter when it prompts for a file to save the key to use the default
> location, or, create one in a specified directory. **Leave the passphrase
> blank**. You will receive a key fingerprint and a randomart image.

Generate a password for the **centreon** user on the distant server:

``` shell
passwd centreon
```

Then, copy this key on to the distant server with the following commands:

``` shell
su - centreon
ssh-copy-id -i .ssh/id_rsa.pub centreon@<IP_POLLER>
```

#### Copy SSH keys for Apache user

For the discovery to be made from web interface, it is necessary to authorize
Apache process to access to **centreon** user's SSH keys. To do so execute the
following commands:

``` shell
mkdir /var/www/.ssh/
cp /var/spool/centreon/.ssh/* /var/www/.ssh/
chown -R apache. /var/www/.ssh
chmod 600  /var/www/.ssh/id_rsa
```

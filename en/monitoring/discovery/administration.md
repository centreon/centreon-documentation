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

Connect to the Centreon's web interface using an account allowed to administer
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

## Gorgone module configuration

The **Auto Discovery** module brings a specific configuration for the Gorgone
service on the Central server. The default configuration is
`/etc/centreon-gorgone/config.d/41-autodiscovery.yaml`.

A maximum duration for hosts discovery jobs is set globally. If its necessary to
change it (large subnet SNMP discovery for example), edit the configuration and
add the *global_timeout* directive.

If mail notifications are enabled in service discovery rules, mail parameters
can be defined to choose the sender, subject or mail command.

Example of configuration:

```yaml
gorgone:
  modules:
    - name: autodiscovery
      package: "gorgone::modules::centreon::autodiscovery::hooks"
      enable: true
      # Host Discovery
      check_interval: 15
      global_timeout: 300
      # Service Discovery
      mail_subject: Centreon Auto Discovery
      mail_from: centreon-autodisco
      mail_command: /bin/mail
```

> Be sure to restart Gorgone service after any configuration modification:
>
> ```shell
> systemctl restart gorgoned
> ```

### Distributed architecture

The hosts and services discoveries both rely on Gorgone to perform discoveries
on both Central and Remote Server or Pollers.

> It is necessary to have a ZMQ communication between the Central server and a
> Remote Server to perform a discovery on a Poller attached to this Remote
> Server.
>
> Look at the section presenting the differente [communication
> types](../monitoring-servers/communications.html) to know more.

### Service Discovery scheduled job

All the active discovery rules are periodically executed through a scheduled job
managed by Gorgone's cron module. The **Auto Discovery** module brings a cron
definition in the following file:
`/etc/centreon-gorgone/config.d/cron.d/41-service-discovery.yaml`.

```yaml
- id: service_discovery
  timespec: "30 22 * * *"
  action: LAUNCHSERVICEDISCOVERY
```

The default configuration runs the discovery every day at 10:30 PM.

> If you had change the legacy *crond* configuration file to adapt the schedule
> you must apply changes to the new configuration file.

### API accesses

When installing Gorgone, a default configuration to access the Centreon APIs is
located at `/etc/centreon-gorgone/config.d/31-centreon-api.yaml`.

It defines accesses to both Centreon CLAPI and RestAPI to allow discovery to
communicate with Centreon.

Example of configuration:

```yaml
gorgone:
  tpapi:
    - name: centreonv2
      base_url: "http://127.0.0.1/centreon/api/beta/"
      username: admin
      password: centreon
    - name: clapi
      username: admin
      password: centreon
```

> The *username* and *password* directives might be changed to adapt to
> an *admin* user crendentials needed for services creation and configuration
> reloading, or a user with API accesses for host discovery.

---
id: commands
title: Commands
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Definition

Check commands are used by the monitoring engine to check the status of a host or service. Check commands execute [plugins](../../resources/glossary.md#plugin). A check command is used in a host template or a service template. If these templates are applied to a host or service, the script called by the command is executed when the host or service is checked, with the options you have defined.

Most commands are provided by the Monitoring Connectors you have installed and are ready to use. However, if these commands do not meet your needs (e.g. they have too many or too few arguments) you can create new ones (custom commands). You need to create one command per plugin and per [mode](../../resources/glossary.md#mode). Custom commands are an advanced feature.

Commands can be configured in the following menu: **Configuration > Commands > Commands**.

> By default, only custom commands (i.e. user-created commands) are displayed. All commands provided by Monitoring Connectors are read-only ("locked") and hidden. Check the "Locked elements" box to show these commands.

## Creating a custom check command

1. Go to **Configuration > Commands > Commands**.
2. Click **Add**.
3. Fill in the following fields:

   * **Name**: This name will appear in the list of commands in the host and service template creation forms.
   * **Command type**: in Centreon Cloud, only **Check** and **Miscellaneous** are available. **Miscellaneous** commands are used with [event handlers](../event-handler.md).
   * **Command Line**: the actual command that will be executed when a check is made. The syntax is that of Nagios. Use the lists on the left to insert variables quickly and/or type your own contents. You need to specify:

      * A macro that represents the path to the script executed by the command (with no filename). For Centreon or Nagios plugins, use a variable so that Centreon can find the path to the plugins folder on any OS (the variable is defined on the **Configuration > Pollers > Global macros** page). If you are using your own plugins, specify the path where you have stored the plugins. Default values appear in **Poller global macros**, but you can also type the path to your own plugin you have stored somewhere else.

      Examples:

         * $CENTREONPLUGINS$ if the plugin you are using is in the same place as Centreon plugins (like centreon_linux_snmp.pl)
         * $USER1$ if the plugin you are using is in the same place as Nagios plugins (like check_icmp)
         * /custom/path/ if the plugin you are using is in a custom location
         * create the global macro $MYPLUGINS$  if the path is /custom/path/ on one poller and /alt/path/ on another one. This way you may use the same command for the same plugin found in various places depending on the poller.

      * The name of the plugin you want to use (stored in the path specified in the poller global macro). **Installed plugins** allows you to select Nagios plugins. Examples: `centreon_linux_snmp.pl`, `check_icmp`...
      * Any option you want to pass to the plugin in this [mode](../../resources/glossary.md#mode). For Centreon plugins, refer to the documentation of the plugin in the [Monitoring Connectors](/pp/integrations/plugin-packs/getting-started/introduction) section. Examples: `--community=public`, `--warning=1`, `--verbose`...
      * Instead of hardcoding an option value, you can use [macros](macros.md) (host macros or service macros) to make your command more generic, but it is not compulsory. The macros's name will appear in the configuration form for the host or service so that you can give it a specific value for each host or service you use it with. You can use [**Standard macros**](./macros.md#standard-macros), or create you own [custom macros](./macros.md#custom-macros). Exampls: `--hostname='$HOSTADDRESS$'`, `--warning='$_SERVICEWARNING$'`, `--community='$_HOSTSNMPCOMMUNITY$'`...

   * **Enable shell syntax**: check this box if your command uses shell functions (pipes, redirects, wildcards...). Note that commands requiring the shell slow down the monitoring server.

   * **Optimization connectors**: use the **[Perl Connector](#perl-connector)** or the **[SSH Connector](#ssh-connector)** to reduce the consumption of resources of the plugin. The Perl connector can be used with all commands provided by Centreon that use Perl plugins (.pl). It is not compatible with commands that use **check_icmp** and **check_nrpe**.

4. Click **Save**. The command now appears in the **Check command** list in the host or service template configuration pages.

## Using a custom check command

Once you have created your custom check command:

1. Link the command to the host or service template you want: use the **Check command** field in the host or service template configuration form.
2. Link this host or service template to the host or service you want: in the configuration form for the host or service, select the template you have linked the command to.
3. Fill in the correct values for any macros in the configuration form for the host or service.
3. [Deploy the configuration](../monitoring-servers/deploying-a-configuration.md). The host or service appears in the **Resources Status** page. You can see your custom command in the details panel of the host or service, with the correct values for the macros. Once the check has been executed, you can see the output of the command here too.
4. Add the command to the [command whitelist](#command-whitelist) of the poller that will run the check.

## Command whitelist

For security reasons, Centreon Cloud has a built-in whitelist that defines which commands are allowed to be executed by the monitoring engine of each poller. By default, it allows all commands provided by the Monitoring Connectors. If you create custom plugins with your own custom commands in it, or are using a community plugin, you will have to add their commands to the command whitelist of the poller that will run the plugin.

### Add a command to the whitelist

1. Log in as **root** to the poller that will run the commmand.
2. Edit (or create) the following file: **/etc/centreon-engine-whitelist/my-whitelist.yml**. (You can create as many whitelist files as you want in this directory.)
3. Make sure the correct access rights are defined on all whitelist files:

   ```yaml
   chown root:centreon-engine /etc/centreon-engine-whitelist/my-whitelist.yml
   chmod 0640 /etc/centreon-engine-whitelist/my-whitelist.yml
   chown root:centreon-engine /etc/centreon-engine-whitelist
   chmod 750 /etc/centreon-engine-whitelist
   ```

4. Use a regex to define which commands to authorize. Example:

  ```text
  whitelist:
      regex:
		 - \/usr\/lib(64)?\/nagios\/plugins\/.*
		 - \/usr\/lib(64)?\/nagios\/plugins\/.check_.*
         - \/opt\/my_plugins\/my_custom_plugin\.py .*
  cma-whitelist:
  default:
    regex:
      - \/usr\/lib(?:64)?\/nagios\/plugins\/.*
      - \/usr\/lib(?:64)?\/centreon\/plugins\/check_centreon_bam.*
      - \"C:\/Program Files\/Centreon\/Plugins\/centreon_plugins.exe\"\s+.+
      - ^\{\s*"check":".*\}$
      - \/usr\/bin\/echo\s+Host\s+alive
      - cmd\.exe\s+\/C\s+echo\s+.*
  ```

The **whitelist** block defines the commands that can be executed by the poller. 

> The first two lines must always be present in the “whitelist” block; they correspond to Centreon commands.

The **cma-whitelist** block defines the commands that can be executed by the CMA agent.

In the **cma-whitelist** block, you can specify whitelists by host if necessary. The syntax is as follows:

```text
whitelist:
  regex:
	 - \/usr\/lib(64)?\/nagios\/plugins\/.*
	 - \/usr\/lib(64)?\/nagios\/plugins\/.check_.*
	 - \/opt\/my_plugins\/my_custom_plugin\.py .*
cma-whitelist:
  default:
    regex:
      - \/usr\/lib(?:64)?\/nagios\/plugins\/.*
      - \/usr\/lib(?:64)?\/centreon\/plugins\/check_centreon_bam.*
      - \"C:\/Program Files\/Centreon\/Plugins\/centreon_plugins.exe\"\s+.+
      - ^\{\s*"check":".*\}$
      - \/usr\/bin\/echo\s+Host\s+alive
      - cmd\.exe\s+\/C\s+echo\s+.*
  hosts:
    - hostname:Host_1
    regex:
      - ...
      
    - hostname:Host_2
    regex:
      - ...
```


Use `.*` to include all arguments in the regex. The `.*`  at the end of the regex allows it to handle any arguments it may contain. Bear in mind that the format must be strictly indentical to the one above (including indents).

> If you have not authorized your custom command in a whitelist, it will say so in the **Information** column of the **Resources Status** page.

## Optimization connectors

### SSH connector

The Centreon SSH Connector is free software from Centreon available under the Apache Software License version 2 (ASL 2.0).
It speeds up the execution and saves resources consumption by checks over SSH when used with Centreon Engine by avoiding to perform all the authentication transactions at every check.

#### Installation

Centreon recommends using its official packages. Most of Centreon’s endorsed software is available as RPM and DEB packages.

Run the following commands as a privileged user:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

``` shell
dnf install centreon-connector-ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

``` shell
dnf install centreon-connector-ssh
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

``` shell
apt install centreon-connector-ssh
```

</TabItem>
</Tabs>

### Perl connector

The Centreon Perl Connector is free software from Centreon available under the Apache Software License version 2 (ASL 2.0).
It speeds up execution of Perl scripts when used with Centreon Engine by avoiding compiling the Perl code at every check.

#### Installation

Centreon recommends using its official packages. Most of Centreon’ endorsed software are available as RPM and DEB packages.

Run the following commands as a privileged user:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

``` shell
dnf install centreon-connector-perl
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

``` shell
dnf install centreon-connector-perl
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

``` shell
apt install centreon-connector-perl
```

</TabItem>
</Tabs>

#### Less fork mode

> **Beta feature:** This mode has not yet been validated for all Centreon plugins. Test it on a limited number of pollers with your specific plugins before deploying at scale in production.

In addition to avoiding Perl recompilation, the Perl connector supports a **less fork** mode. In standard mode, a child process is spawned for each check then immediately killed. In less fork mode, child processes are reused across multiple checks, dramatically reducing CPU usage.

**Performance measurements** (50 hosts × 10 services each):

| Mode | CPU usage |
|------|-----------|
| Engine without connector | 85% |
| Perl connector – standard (fork per check) | 38% |
| Perl connector – less fork (process reuse) | **11%** |

**How it works**

The `--child-max-reuse-script` option controls how many checks a child process can execute before being killed:

- Default value: `1` (each child dies after one check — classic fork behavior)
- Less fork mode: set to a higher value, e.g. `100`

The connector also automatically kills a child process if it exceeds the following thresholds:
- `--child-max-memory-increase-percent` (default: 10%): memory increase since first check
- `--child-max-fd-increase-percent` (default: 10%): file descriptor increase since first check
- `--child-max-thread` (default: 10): number of threads created
- `--idle-child-ttl` (default: 15 min): idle time without any check

**Usage**

The **Perl Connector Less Fork** connector is pre-configured on your poller. To benefit from less fork mode, go to **Configuration > Commands > Checks** and select **Perl Connector Less Fork** in the **Connectors** field of each check command you want to optimize, if it is not already set.

**Per-command override**

You can also override the reuse limit for a specific command by inserting the keyword directly in the command line, between the script path and the script's arguments:

```shell
/usr/lib/nagios/plugins/check_something.pl --child-max-reuse-script 5 --arg1 value1
```

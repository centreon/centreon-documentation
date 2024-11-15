---
id: commands
title: Commands
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Definition

Check commands are used by the monitoring engine to check the status of a host or service. Check commands execute [plugins](../../resources/glossary.md#plugin). A check command is used in a host template or a service template. If these templates are applied to a host or service, the script called by the command is executed when the host or service is checked, with the options you have defined.

Most commands are provided by the Monitoring Connectors you have installed and are ready to use. However, if these commands do not meet your needs (e.g. they have too many or too few arguments) you can create new ones (custom commands). You need to create one command per plugin and per [mode](../../resources/glossary.md#mode). Custom commands are an advanced feature.

Commands can be configured in the following menu: **Configuration > Commands > Checks**.

> By default, only custom commands (i.e. user-created commands) are displayed. All commands provided by Monitoring Connectors are read-only ("locked") and hidden. Check the "Locked elements" box to show these commands.

## Creating a custom check command

1. Go to **Configuration > Commands > Checks**.
2. Click **Add**.
3. Fill in the following fields:

   * **Command Name**: defines the name of the command. This name will appear in the list of commands in the host and service template creation forms.
   * **Command Line**: the actual command that will be executed when a check is made. The syntax is that of Nagios. You need to specify:

      * the application or script executed by the command (path and filename). For Centreon or Nagios plugins, use a variable so that Centreon can find the path to the plugins folder on any OS (the variable is defined on the **Configuration > Pollers > Resources** page). If you are using your own plugins, specify the path where you have stored the plugins.
      * the [mode](../../resources/glossary.md#mode) of the plugin to use.
      * any parameter you want to pass to the plugin in this mode. For Centreon plugins, refer to the documentation of the plugin in the [Monitoring Connectors](/pp/integrations/plugin-packs/getting-started/introduction) section.
      * You can use [macros](macros.md) (host macros or service macros) to make your command more generic, but it is not compulsory. The macros's name will appear in the configuration form for the host or service so that you can give it a specific value for each host or service you use it with.

   * **Describe macros**: add a description to custom macros. This description will be visible when using the command in a host or service configuration form.
   * **Connectors**: use the **[Perl Connector](#perl-connector)** or the **[SSH Connector](#ssh-connector)** to reduce the consumption of resources of the plugin. The Perl connector can be used with all commands except **check_icmp** and **check_nrpe**.
   * **Graph template**: link the command to a graph template.

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
3. Use a regex to define which commands to authorize. Example:

   ```yaml /etc/centreon-engine-whitelist/my_whitelist.yml
   whitelist:
     regex:
       - \/opt\/my_plugins\/my_custom_plugin\.py .*
    ```

The `.*`  at the end of the regex allows it to handle any arguments it may contain. Bear in mind that the format must be strictly indentical to the one above (including indents).

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

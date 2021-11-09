---
id: developer-module
title: How to write a module
---

You want to create a new module for Centreon or to adapt an existing one? You're at the right place!

An empty module template can be found inside [Centreon's repository](https://github.com/centreon/centreon-dummy)

---
> **_NOTE:_** Main documentation is directly stored in the
> [dummy repository](https://github.com/centreon/centreon-dummy/blob/master/README.md)

---

You should know Centreon contains a page dedicated to the installation and the uninstallation of modules
(**Administration > Extensions > Manager**). To make the module appears on this page, its directory must be placed inside
Centreon's ``modules/`` directory. Example:

```Shell
/usr/share/centreon/www/modules/dummy
```

## Basis

The essential elements your module's directory must contain are presented below:
```PHP
$module_conf['dummy'] = [
    // Short module's name. Must be equal to your module's directory name
    'name' => 'dummy',
    // Full module's name
    'rname' => 'Dummy Example Module',
    // Module's version
    'mod_release' => '21.04',
    // Additional information
    'infos' => 'This module is a skeleton',
    // Allow your module to be uninstalled
    'is_removeable' => '1',
    // Module author's name
    'author' => 'Centreon',
    // Stability of module.
    'stability' => 'stable',
    // Last time module was updated.
    'last_update' => '2020-12-01',
    // Release notes link, if any.
    'release_note' => 'https://docs.centreon.com/current/en/releases/centreon-os-extensions.html',
    // Images associated with this module.
    'images' => [
        'images/centreon.png',
    ],
];
```

**[php > install.php]**

This PHP file is executed at module installation if it is configured
inside the *conf.php* file.

**[php > uninstall.php]**

This PHP file is executed at module uninstallation if it is configured
inside the *conf.php* file.

**[sql > install.sql]**

This SQL file is executed during the module installation if it is configured inside the *conf.php* file. If you want
your module to be available from Centreon menus, you must insert new entries into the ``topology`` table of the
``centreon`` database. An example is available inside the ``Dummy`` module.

**[sql > uninstall.sql]**

This SQL file is executed during the module uninstallation if it is configured inside the *conf.php* file. It can also
remove your module from Centreon menus.

**[generate_files > \*.php]**

The PHP files contained inside the ``generate_files`` directory will be executed during the monitoring engine
configuration files generation (inside **Configuration > Monitoring Engines**). Those files must generate configuration
files.

**[UPGRADE > dummy-x.x > sql > upgrade.sql]**

Centreon provides an upgrade system for modules. To use it, just add a directory under ``UPGRADE`` named using the
following pattern: ``<module name>-<version>``. When clicking on the upgrade button, Centreon will search for scripts
to execute, following the logical order of versions.

For example, if the version 1.0 of the dummy module is installed and the following directories exist:
```Shell
ls UPGRADE
dummy-1.1 dummy-1.2
```

Centreon will execute the scripts in the following order : 1.1, 1.2. A configuration file in each upgrade directory is
present in order to allow (or not) the execution.

You're free to organize the remaining files (your module's content) as you like.

## Advanced

  > :warning: **This section is deprecated, please refer to
  > the [dummy repository documentation](https://github.com/centreon/centreon-dummy/blob/master/README.md)**

That's great, you know how to install a module! As an empty module is not really useful, put your imagination at work.
Knowing that you can do almost everything, it should not be too complicated :-).

### Connecting to the database

You can use the ``centreon`` and ``centstorage`` databases by calling the following file:
``centreon/www/class/centreonDB.class.php``.

For example, execute requests like this:

```PHP
$pearDB = new CentreonDB();
$pearDB->query("SELECT * FROM host");
```

### Existing functions

You can access most of the functions already developed within Centreon using ``include()`` statements. They're generally
stored in ``centreon/www/class/``.

Before developing your own function, check the existing code, it could spare your time!

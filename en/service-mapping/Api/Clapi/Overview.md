Overview
========

Configuration-wise, the Centreon CLAPI offers almost all the same
features as on the user interface. Installing Centreon BAM adds some
functionality to the command line API for manipulating Centreon BAM
objects:

-   Add/Delete/Update Centreon BAM objects such as Business Views,
    Business Activities, Indicators (KPIs), etc.
-   Export/import Centreon BAM objects.

**Basic use**

Since actions in Centreon CLAPI will require authentication, commands
will always start as follows:

    # cd /usr/share/centreon/bin
    # ./centreon -u admin -p centreon [...]

The **-u** option represents the username and **-p** the password. The
password in the database can be in readable-character or encrypted form.

::: {.note}
::: {.title}
Note
:::

If your passwords are encoded with SHA1 in the database (MD5 by
default), use the **-s** option:

    # ./centreon -u admin -p centreon -s [...]
:::

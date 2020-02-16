Business Activity (BA)
======================

Overview
--------

Object name: **BA**

Show
----

To list available business activities, use the **SHOW** action:

    [root@centreon ~]# ./centreon -u admin -p centreon -o BA -a SHOW
    id;name;description;level_w;level_c
    1;ba1;ba1;80;70
    2;ba2;ba2;80;70
    [...]

The following columns are required:

  Column           Description
  ---------------- -------------------------------
  BA ID            Business Activity id
  BA name          Business Activity name
  Ba description   Business Activity description
  level\_w         Warning threshold
  level\_c         Critical threshold

ADD
---

To add a BA, use the **ADD** action:

    [root@centreon ~]# ./centreon -u admin -p centreon -o BA -a ADD -v 'ba1;ba1;90;80;5'

The following columns are required:

  Column                  Description
  ----------------------- ---------------------------------
  Name                    Business Activity name
  Description             Business Activity description
  Warning threshold       Warning threshold
  Critical threshold      Critical threshold
  Notification interval   Notification interval (minutes)

DEL
---

To remove a BA, use the **DEL** action:

    [root@centreon ~]# ./centreon -u admin -p centreon -o BA -a DEL -v 'ba1'

SETPARAM
--------

To change a specific parameters for a BV, use the **SETPARAM** action:

    [root@centreon ~]# ./centreon -u admin -p centreon -o BA -a SETPARAM -v 'ba1;enable;1'
    [root@centreon ~]# ./centreon -u admin -p centreon -o BA -a SETPARAM -v 'ba1;comment;new comments'
    [root@centreon ~]# ./centreon -u admin -p centreon -o BA -a SETPARAM -v 'ba1;notification_options;r,w,c'

Parameters that you can change are the following:

  Parameter                       Description
  ------------------------------- ---------------------------------------------------------------------
  name                            Business Activity name
  description                     Business Activity description
  level\_w                        Warning threshold
  level\_c                        Critical threshold
  reporting\_period               reporting period
  comment                         Comments
  notifications\_enabled          Enable notifications (0 or 1)
  notification\_options           Notification options (r,w,c,f)
  notification\_period            Notification period
  notification\_interval          Notification interval
  first\_notification\_delay      Delay before sending first notification when entering non-OK status
  recovery\_notification\_delay   Delay before sending first notification when entering OK status
  icon                            Business Activity icon
  inherit\_kpi\_downtimes         Inherit planned downtimes from KPIs (0 or 1)
  enable                          Enable (0 or 1)

SETBV
-----

To set a BV to a BA, use the **SETBV** action:

    [root@centreon ~]# ./centreon -u admin -p centreon -o BA -a SETBV -v 'ba1;bv1'
    [root@centreon ~]# ./centreon -u admin -p centreon -o BA -a SETBV -v 'ba1;bv1|bv2'

The following columns are required:

  Column    Description
  --------- -------------------------------------------------
  Ba name   Business Activity name
  Bv name   Business View name (multiple with \| seperator)

ADDBV
-----

To add a BV to a BA, use the **ADDBV** action:

    [root@centreon ~]# ./centreon -u admin -p centreon -o BA -a ADDBV -v 'ba1;bv1'
    [root@centreon ~]# ./centreon -u admin -p centreon -o BA -a ADDBV -v 'ba1;bv2|bv3'

The following columns are required:

  Column    Description
  --------- -------------------------------------------------
  BA name   Business Activity name
  BV name   Business View name (multiple with \| seperator)

DELBV
-----

To delete a BV from a BA, use the **DELBV** action:

    [root@centreon ~]# ./centreon -u admin -p centreon -o BA -a DELBV -v 'ba1;bv1'

The following columns are required:

  Column    Description
  --------- -------------------------------------------------
  BA name   Business Activity name
  BV name   Business View name (multiple with \| seperator)

SETCONTACTGROUP
---------------

To set contact group to a BA, use the **SETCONTACTGROUP** action:

    [root@centreon ~]# ./centreon -u admin -p centreon -o BA -a SETCONTACTGROUP -v 'ba1;Guest'
    [root@centreon ~]# ./centreon -u admin -p centreon -o BA -a SETCONTACTGROUP -v 'ba1;Guest|Supervisors'

The following columns are required:

  Column               Description
  -------------------- -------------------------------------------------
  BA name              Business Activity name
  Contact group name   Contact group name (multiple with \| seperator)

ADDCONTACTGROUP
---------------

To add contact group to a BA, use the **ADDCONTACTGROUP** action:

    [root@centreon ~]# ./centreon -u admin -p centreon -o BA -a ADDCONTACTGROUP -v 'ba1;Guest'

The following columns are required:

  Column               Description
  -------------------- -------------------------------------------------
  Ba name              BA name
  Contact group name   Contact group name (multiple with \| seperator)

DELCONTACTGROUP
---------------

To delete a contact group from a BA, use the **DELCONTACTGROUP** action:

    [root@centreon ~]# ./centreon -u admin -p centreon -o BA -a DELCONTACTGROUP -v 'ba1;Guest'

The following columns are required:

  Column               Description
  -------------------- -------------------------------------------------
  Ba name              Business Activity name
  Contact group name   Contact group name (multiple with \| seperator)

SETEXTRAREPORTINGPERIOD
-----------------------

To set extra reporting periods for Centreon MBI, use the
**SETEXTRAREPORTINGPERIOD** action:

    [root@centreon ~]# ./centreon -u admin -p centreon -o BA -a SETEXTRAREPORTINGPERIOD -v 'ba1;workhours'

The following columns are required:

  Column                   Description
  ------------------------ -----------------------------------------------------
  Ba name                  Business Activity name
  Extra reporting period   Extra reporting period (multiple with \| seperator)

ADDEXTRAREPORTINGPERIOD
-----------------------

To add extra reporting periods for Centreon MBI, use the
**ADDEXTRAREPORTINGPERIOD** action:

    [root@centreon ~]# ./centreon -u admin -p centreon -o BA -a ADDEXTRAREPORTINGPERIOD -v 'ba1;workhours'

The following columns are required:

  Column                   Description
  ------------------------ -----------------------------------------------------
  Ba name                  Business Activity name
  Extra reporting period   Extra reporting period (multiple with \| seperator)

DELEXTRAREPORTINGPERIOD
-----------------------

To delete extra reporting periods from a BA, use the
**DELEXTRAREPORTINGPERIOD** action:

    [root@centreon ~]# ./centreon -u admin -p centreon -o BA -a DELEXTRAREPORTINGPERIOD -v 'ba1;workhours'

The following columns are required:

  Column                   Description
  ------------------------ -----------------------------------------------------
  Ba name                  Business Activity name
  Extra reporting period   Extra reporting period (multiple with \| seperator)

SETPOLLER
---------

To set the poller where the BA is calculated (in addition to central),
use the **SETPOLLER** action:

    [root@centreon ~]# ./centreon -u admin -p centreon -o BA -a SETPOLLER -v 'ba1;poller1'

The following columns are required:

  Column        Description
  ------------- ---------------------------------------------------
  Ba name       Business Activity name
  Poller name   Poller name where Business Activity is calculated

DELPOLLER
---------

To delete poller where the BA is calculated, use the **DELPOLLER**
action:

    [root@centreon ~]# ./centreon -u admin -p centreon -o BA -a DELPOLLER -v 'ba1;poller1'

The following columns are required:

  Column        Description
  ------------- ---------------------------------------------------
  Ba name       Business Activity name
  Poller name   Poller name where Business Activity is calculated

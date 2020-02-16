KPI
===

Overview
--------

Object name: **KPI**

SHOW
----

To list available KPI, use the **SHOW** action:

    [root@centreon ~]# ./centreon -u admin -p centreon -o KPI -a SHOW
    id;type;name;impacted_ba;warning_impact;critical_impact;unknown_impact
    1;service;Centreon-Server Load;ba1;25;50;20
    2;metaservice;meta1;toto;50;100;75 
    [...]

Columns are the following:

  Column            Description
  ----------------- ---------------------------------------------
  KPI ID            KPI id
  KPI type          *service*, *metaservice*, *ba* or *boolean*
  KPI name          KPI name
  Impacted BA       Impacted business activity
  Warning impact    Warning impact
  Critical impact   Critical impact
  Unknown impact    Unknown impact

ADD
---

To add a KPI, use the **ADD** action:

    [root@centreon ~]# ./centreon -u admin -p centreon -o KPI -a ADD -v 'service;host1|service1;ba1;10;20;5'
    [root@centreon ~]# ./centreon -u admin -p centreon -o KPI -a ADD -v 'metaservice;meta11;ba2;minor;major;null'
    [root@centreon ~]# ./centreon -u admin -p centreon -o KPI -a ADD -v 'ba;ba1;ba3;10;20;5'
    [root@centreon ~]# ./centreon -u admin -p centreon -o KPI -a ADD -v 'boolean;rule1;ba4;10;20;5'

Required columns are the following:

  Column            Description
  ----------------- ---------------------------------------------
  KPI type          *service*, *metaservice*, *ba* or *boolean*
  Object            Object used in KPI
  Impacted BA       Impacted business activity
  Warning impact    Warning impact
  Critical impact   Critical impact
  Unknown impact    Unknown impact

DEL
---

If you want to remove a KPI, use the **DEL** action:

    [root@centreon ~]# ./centreon -u admin -p centreon -o KPI -a DEL -v 'ba;ba1;ba3'

SETPARAM
--------

If you want to change a specific parameters for a KPI, use the
**SETPARAM** action:

    [root@centreon ~]# ./centreon -u admin -p centreon -o KPI -a SETPARAM -v 'service;host1|service1;ba1;enable;0'
    [root@centreon ~]# ./centreon -u admin -p centreon -o KPI -a SETPARAM -v 'metaservice;meta1;ba1;warning_impact;50'

Parameters that you can change are the following:

  Parameter          Description
  ------------------ ----------------------------
  warning\_impact    Warning impact
  critical\_impact   Critical impact
  unknown\_impact    Unknown impact
  impacted\_ba       Impacted business activity
  enable             Enable (0 or 1)

SETIMPACTMODE
-------------

If you want to change configuration mode, use the **SETIMPACTMODE**
action:

    [root@centreon ~]# ./centreon -u admin -p centreon -o KPI -a SETIMPACTMODE -v 'ba;ba1;ba3;advanced'

Parameters that you can change are the following:

  Parameter     Description
  ------------- ---------------------------------------------
  KPI type      *service*, *metaservice*, *ba* or *boolean*
  Object        Object used in KPI
  Impacted BA   Impacted business activity
  Impact mode   regular or advanced

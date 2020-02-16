Business View (BV)
==================

Overview
--------

Object name: **BV**

SHOW
----

To list available BVs, use the **SHOW** action:

    [root@centreon ~]# ./centreon -u admin -p centreon -o BV -a SHOW
    id;name;description
    4;BV1;BV1
    5;BV2;BV2
    6;BV4;BV3
    [...]

The following columns are required:

  Column           Description
  ---------------- ---------------------------
  BV ID            Business View id
  BV name          Business View name
  BV description   Business View description

ADD
---

To add a BV, use the **ADD** action:

    [root@centreon ~]# ./centreon -u admin -p centreon -o BV -a ADD -v 'BV1;BV1'

The following columns are required:

  Column        Description
  ------------- ---------------------------
  Name          Business View name
  Description   Business View description

DEL
---

To remove a BV, use the **DEL** action:

    [root@centreon ~]# ./centreon -u admin -p centreon -o BV -a DEL -v 'BV1'

SETPARAM
--------

To change specific parameters for a BV, use the **SETPARAM** action:

    [root@centreon ~]# ./centreon -u admin -p centreon -o BV -a SETPARAM -v 'BV1;description;BV description'

You can change the following parameters:

  Parameter     Description
  ------------- -------------------------------
  name          Business Activity name
  description   Business Activity description
  overview      Visible in overview (0 or 1)

SETBA
-----

To set the Business Activity (BA) to a BV, use the **SETBA** action:

    [root@centreon ~]# ./centreon -u admin -p centreon -o BV -a SETBA -v 'bv1;ba1'

The following columns are required:

  Column    Description
  --------- -----------------------------------------------------
  Bv name   Business View name
  Ba name   Business Activity name (multiple with \| separator)

ADDBA
-----

To add BA to a BV, use the **ADDBA** action:

    [root@centreon ~]# ./centreon -u admin -p centreon -o BV -a ADDBA -v 'bv1;ba1'

The following columns are required:

  Column    Description
  --------- -----------------------------------------------------
  Bv name   Business View name
  Ba name   Business Activity name (multiple with \| separator)

DELBA
-----

To delete a BA from a BV, use the **DELBA** action:

    [root@centreon ~]# ./centreon -u admin -p centreon -o BV -a DELBA -v 'bv1;ba1'

The following columns are required:

  Column    Description
  --------- -----------------------------------------------------
  Bv name   Business View name
  Ba name   Business Activity name (multiple with \| separator)

SETACLGROUP
-----------

To set an ACL group to a BV, use the **SETACLGROUP** action:

    [root@centreon ~]# ./centreon -u admin -p centreon -o BV -a SETACLGROUP -v 'bv1;ALL'

The following columns are required:

  Column           Description
  ---------------- ---------------------------------------------
  Bv name          Business View name
  Acl group name   Acl group name (multiple with \| separator)

ADDACLGROUP
-----------

To add an ACL group to a BV, use the **ADDACLGROUP** action:

    [root@centreon ~]# ./centreon -u admin -p centreon -o BV -a ADDACLGROUP -v 'bv1;ALL'

The following columns are required:

  Column           Description
  ---------------- ---------------------------------------------
  Bv name          Business View name
  Acl group name   Acl group name (multiple with \| separator)

DELACLGROUP
-----------

To delete an ACL group from a BV, use the **DELACLGROUP** action:

    [root@centreon ~]# ./centreon -u admin -p centreon -o BV -a DELACLGROUP -v 'bv1;ALL'

The following columns are required:

  Column           Description
  ---------------- ---------------------------------------------
  Bv name          Business View name
  Acl group name   ACL group name (multiple with \| separator)

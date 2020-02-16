Boolean Rule
============

Overview
--------

Object name: **BOOLEANRULE**

SHOW
----

To list available boolean rules, use the **SHOW** action:

    [root@centreon ~]# ./centreon -u admin -p centreon -o BOOLEANRULE -a SHOW 
    id;name;expression;bool_state
    8;rule1;expression1;1
    9;rule2;expression2;1
    [...]

The following columns are required:

  Column            Description
  ----------------- ------------------------------------------------------
  Rule ID           Boolean rule id
  Rule name         Boolean rule name
  Rule expression   Boolean rule expression
  Bool state        Impact is applied when expression returns this state

ADD
---

To add a boolean rule, use the **ADD** action:

    [root@centreon ~]# ./centreon -u admin -p centreon -o BOOLEANRULE -a ADD -v 'rule1;expression1;1'

The following columns are required:

  Column            Description
  ----------------- ------------------------------------------------------
  Rule name         Boolean rule name
  Rule expression   Boolean rule expression
  Bool state        Impact is applied when expression returns this state

DEL
---

To remove a boolean rule, use the **DEL** action:

    [root@centreon ~]# ./centreon -u admin -p centreon -o BOOLEANRULE -a DEL -v 'rule1'

SETPARAM
--------

To change a specific parameter for a boolean rule, use the **SETPARAM**
command:

    [root@centreon ~]# ./centreon -u admin -p centreon -o BOOLEANRULE -a setparam -v 'rule1;expression;new expression'

Parameters that you can change are the following:

  Parameter     Description
  ------------- ------------------------------------------------------
  name          Boolean rule name
  expression    Boolean rule expression
  bool\_state   Impact is applied when expression returns this state

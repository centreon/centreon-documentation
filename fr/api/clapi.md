---
id: clapi
title: Command Line API (v1)
---

> Cette documentation n'est disponible qu'en anglais.

## Overview

Centreon CLAPI aims to offer (almost) all the features that are available on the
user interface in terms of configuration.

### Features

* Add/Delete/Update objects such as hosts, services, host templates, host groups, contacts etc...
* Generate configuration files
* Test configuration files
* Move configuration files to monitoring pollers
* Restart monitoring pollers
* Import and export objects

### Basic usage

All actions in Centreon CLAPI will require authentication, so your commands will always start like this:

``` shell
centreon -u admin -p centreon [...]
```

Obviously, the **-u** option is for the username and the **-p** option is for the password. The password can be in clear
or the encrypted in the database.

> ***NOTE:*** If your passwords are encoded with SHA1 in database (MD5 by default), use the **-s** option:

``` shell
centreon -u admin -p centreon -s [...]
```

## Objects

### ACL

Object name: **ACL**

#### Reload

In order to reload ACL, use the **RELOAD** command:

``` shell
centreon -u admin -p centreon -o ACL -a reload
```

#### Lastreload

In order to check when the ACL was last reloaded, use the **LASTRELOAD** command:

``` shell
centreon -u admin -p centreon -o ACL -a lastreload
1329833702
```

If you wish to get a human readable time format instead of a timestamp, use the following command:

``` shell
centreon -u admin -p centreon -o ACL -a lastreload -v "d-m-Y H:i:s"
21-02-2012 15:17:01
```

You can change the date format:

| Format character | Description |
| ---------------- | ----------- |
| d                | Day         |
| m                | Month       |
| Y                | Year        |
| H                | Hour        |
| i                | Minute      |
| s                | Second      |

### ACL Groups

Object name: **ACLGROUP**

#### Show

In order to list available ACL Groups, use the **SHOW** action:

``` shell
centreon -u admin -p centreon -o ACLGROUP -a show
id;name;alias;activate
1;ALL;ALL;1
[...]
```

Columns are the following :

| Column   | Description                              |
| -------- | ---------------------------------------- |
| ID       | ID                                       |
| Name     | Name                                     |
| Alias    | Alias                                    |
| Activate | 1 when ACL Group is enabled, 0 otherwise |

#### Add

In order to add an ACL Group, use the **ADD** action:

``` shell
centreon -u admin -p centreon -o ACLGROUP -a add -v "ACL Group test;my alias"
```

Required fields are:

| Column | Description |
| ------ | ----------- |
| Name   | Name        |
| Alias  | Alias       |

#### Del

If you want to remove an ACL Group, use the **DEL** action. The Name is used for identifying the ACL Group to delete:

``` shell
centreon -u admin -p centreon -o ACLGROUP -a del -v "ACL Group test"
```

#### Setparam

If you want to change a specific parameter of an ACL Group, use the **SETPARAM** action. The Name is used for
identifying the ACL Group to update:

``` shell
centreon -u admin -p centreon -o ACLGROUP -a setparam -v "ACL Group test;alias;my new alias"
```

Arguments are composed of the following columns:

| Order | Column description |
| ----- | ------------------ |
| 1     | Name of ACL Group  |
| 2     | Parameter name     |
| 3     | Parameter value    |

Parameters that you may change are:

| Column   | Description                              |
| -------- | ---------------------------------------- |
| name     |                                          |
| alias    |                                          |
| activate | 1 when ACL Group is enabled, 0 otherwise |

#### Getmenu

If you want to retrieve the Menu Rules that are linked to a specific ACL Group, use the **GETMENU** action:

``` shell
centreon -u admin -p centreon -o ACLGROUP -a getmenu -v "ACL Group test" 
id;name
1;Configuration
3;Reporting
4;Graphs
2;Monitoring + Home
```

Arguments are composed of the following columns:

| Order | Column description |
| ----- | ------------------ |
| 1     | Name of ACL group  |

#### Getaction

If you want to retrieve the Action Rules that are linked to a specific ACL Group, use the **GETACTION** action:

``` shell
centreon -u admin -p centreon -o ACLGROUP -a getaction -v "ACL Group test"
id;name
1;Simple action rule
```

Arguments are composed of the following columns:

| Order | Column description |
| ----- | ------------------ |
| 1     | Name of ACL group  |

#### Getresource

If you want to retrieve the Resource Rules that are linked to a specific ACL Group, use the **GETRESOURCE** action:

``` shell
centreon -u admin -p centreon -o ACLGROUP -a getresource -v "ACL Group test"
id;name
1;All Resources
```

Arguments are composed of the following columns:

| Order | Column description |
| ----- | ------------------ |
| 1     | Name of ACL group  |

#### Getcontact and Getcontactgroup

If you want to retrieve the Contacts that are linked to a specific ACL Group, use the **GETCONTACT** action:

``` shell
centreon -u admin -p centreon -o ACLGROUP -a getcontact -v "ACL Group test"
id;name
1;user1
```

If you want to retrieve the Contact Groups that are linked to a specific ACL Group, use the **GETCONTACTGROUP** action:

``` shell
centreon -u admin -p centreon -o ACLGROUP -a getcontactgroup -v "ACL Group test"
id;name
1;usergroup1
```

Arguments are composed of the following columns:

| Order | Column description |
| ----- | ------------------ |
| 1     | Name of ACL group  |

#### Setmenu, Setaction, Setresource, Addmenu, Addaction, Addresource

If you want to link rules to a specific ACL Group, use the following actions: **SETMENU**, **SETACTION**,
**SETRESOURCE**, **ADDMENU**, **ADDACTION**, **ADDRESOURCE**:

``` shell
centreon -u admin -p centreon -o ACLGROUP -a setmenu -v "ACL Group test;Menu rule 1|Menu rule 2"
```

``` shell
centreon -u admin -p centreon -o ACLGROUP -a addresource -v "ACL Group test;All Routers"
```

| Command type | Description                                                      |
| ------------ | ---------------------------------------------------------------- |
| set\*        | Overwrites previous definitions. Use the delimiter               |
| add\*        | Appends new rules to the previous definitions. Use the delimiter |

Arguments are composed of the following columns:

| Order | Column description           |
| ----- | ---------------------------- |
| 1     | Name of ACL group            |
| 2     | Name of the ACL rule to link |

#### Delmenu, Delaction, Delresource

If you want to remove rules from a specific ACL Group, use the following actions: **DELMENU**, **DELACTION**,
**DELRESOURCE**:

``` shell
centreon -u admin -p centreon -o ACLGROUP -a delaction -v "ACL Group test;Ack rule|Downtime rule"
```

Arguments are composed of the following columns:

| Order | Column description             |
| ----- | ------------------------------ |
| 1     | Name of ACL group              |
| 2     | Name of the ACL rule to remove |

#### Setcontact, Setcontactgroup, Addcontact, Addcontactgroup

If you want to link contacts or contact groups to a specific ACL Group, use the following actions: **SETCONTACT**,
**SETCONTACTGROUP**, **ADDCONTACT**, **ADDCONTACTGROUP**:

``` shell
centreon -u admin -p centreon -o ACLGROUP -a setcontact -v "ACL Group test;user1"
```

``` shell
centreon -u admin -p centreon -o ACLGROUP -a addcontactgroup -v "ACL Group test;usergroup1"
```

Arguments are composed of the following columns:

| Order | Column description               |
| ----- | -------------------------------- |
| 1     | Name of ACL group                |
| 2     | Contact/Contact group to add/set |

| Command type | Description                                                                        |
| ------------ | ---------------------------------------------------------------------------------- |
| set\*        | Overwrites previous definitions. Use the delimiter                                 |
| add\*        | Appends new contacts/contact groups to the previous definitions. Use the delimiter |

#### Delcontact, Delcontactgroup

If you want to remove rules from a specific ACL Group, use the following actions: **DELCONTACT**, **DELCONTACTGROUP**:

``` shell
centreon -u admin -p centreon -o ACLGROUP -a delcontact -v "ACL Group test;user1" 
```

Arguments are composed of the following columns:

| Order | Column description                             |
| ----- | ---------------------------------------------- |
| 1     | Name of ACL group                              |
| 2     | Contact/Contact group to remove from ACL group |

### Action ACL

Object name: **ACLACTION**

#### Show

In order to list available ACL Actions, use the **SHOW** action:

``` shell
centreon -u admin -p centreon -o ACLACTION -a show
id;name;description;activate
1;Simple User;Simple User;1
[...]
```

Columns are the following:

| Column      | Description                               |
| ----------- | ----------------------------------------- |
| ID          |                                           |
| Name        |                                           |
| Description |                                           |
| Activate    | 1 when ACL Action is enabled, 0 otherwise |

#### Add

In order to add an ACL Action, use the **ADD** action:

``` shell
centreon -u admin -p centreon -o ACLACTION -a add -v "ACL Action test;my description"
```

Required fields:

| Column      | Description |
| ----------- | ----------- |
| Name        |             |
| Description |             |

#### Del

If you want to remove an ACL Action, use the **DEL** action. The Name is used for identifying the ACL Action to delete:

``` shell
centreon -u admin -p centreon -o ACLACTION -a del -v "ACL Action test"
```

#### Setparam

If you want to change a specific parameter of an ACL Action, use the **SETPARAM** action. The Name is used for
identifying the ACL Action to update:

``` shell
centreon -u admin -p centreon -o ACLACTION -a setparam -v "ACL Action test;description;my new description"
```

Arguments are composed of the following columns:

| Order | Column description      |
| ----- | ----------------------- |
| 1     | Name of ACL action rule |
| 2     | Parameter name          |
| 3     | Parameter value         |

Parameters that you may change are the following:

| Column      | Description                               |
| ----------- | ----------------------------------------- |
| name        |                                           |
| description |                                           |
| activate    | 1 when ACL Action is enabled, 0 otherwise |

#### Getaclgroup

If you want to retrieve the ACL Groups that are linked to a specific ACL Action, use the **GETACLGROUP** command.

Arguments are composed of the following columns:

| Order | Column description      |
| ----- | ----------------------- |
| 1     | Name of ACL action rule |

##### Example

``` shell
centreon -u admin -p centreon -o ACLACTION -a getaclgroup -v "ACL Action test"
id;name
1;ALL
3;Operators
```

#### Grant and Revoke

If you want to grant or revoke actions in an ACL Action rule definition, use the following commands: **GRANT**,
**REVOKE**.

Arguments are composed of the following columns:

| Order | Column description      |
| ----- | ----------------------- |
| 1     | Name of ACL action rule |
| 2     | Actions to grant/revoke |

##### Example

``` shell
centreon -u admin -p centreon -o ACLACTION -a grant -v "ACL Action test;host_acknowledgement|service_acknowledgement"
```

``` shell
centreon -u admin -p centreon -o ACLACTION -a revoke -v "ACL Action test;host_schedule_downtime|service_schedule_downtime"
```

The **\`\*\`** wildcard can be used in order to grant or revoke all actions:

``` shell
centreon -u admin -p centreon -o ACLACTION -a grant -v "ACL Action test;*"
```

``` shell
centreon -u admin -p centreon -o ACLACTION -a revoke -v "ACL Action test;*"
```

Below is the list of actions that you can grant/revoke:

| Action                             | Description                                                                  |
| ---------------------------------- | ---------------------------------------------------------------------------- |
| global\_event\_handler             | Permission to globally enable/disable event handlers                         |
| global\_flap\_detection            | Permission to globally enable/disable flap detection                         |
| global\_host\_checks               | Permission to globally enable/disable host active checks                     |
| global\_host\_obsess               | Permission to globally enable/disable obsess over host                       |
| global\_host\_passive\_checks      | Permission to globally enable/disable host passive checks                    |
| global\_notifications              | Permission to globally enable/disable notifications                          |
| global\_perf\_data                 | Permission to globally enable/disable performance data                       |
| global\_restart                    | Permission to restart the monitoring engine                                  |
| global\_service\_checks            | Permission to globally enable/disable service active checks                  |
| global\_service\_obsess            | Permission to globally enable/disable obsess over service                    |
| global\_service\_passive\_checks   | Permission to globally enable/disable service passive checks                 |
| global\_shutdown                   | Permission to shut down the monitoring engine                                |
| host\_acknowledgement              | Permission to acknowledge hosts                                              |
| host\_checks                       | Permission to enable/disable host active checks                              |
| host\_checks\_for\_services        | Permission to enable/disable active checks of a host's services              |
| host\_comment                      | Permission to put comments on hosts                                          |
| host\_event\_handler               | Permission to enable/disable event handlers on hosts                         |
| host\_flap\_detection              | Permission to enable/disable flap detection on hosts                         |
| host\_notifications                | Permission to enable/disable notification on hosts                           |
| host\_notifications\_for\_services | Permission to enable/disable notification on hosts' services                 |
| host\_schedule\_check              | Permission to schedule a host check                                          |
| host\_schedule\_downtime           | Permission to schedule a downtime on a host                                  |
| host\_schedule\_forced\_check      | Permission to schedule a host forced check                                   |
| host\_submit\_result               | Permission to submit a passive check result to a host                        |
| poller\_listing                    | Permission to see the Poller list on the monitoring console                  |
| poller\_stats                      | Permission to see the poller statistics (on top screen)                      |
| service\_acknowledgement           | Permission to acknowledge services                                           |
| service\_checks                    | Permission to enable/disable service active checks                           |
| service\_comment                   | Permission to put comments on services                                       |
| service\_event\_handler            | Permission to enable/disable event handlers on services                      |
| service\_flap\_detection           | Permission to enable/disable flap detection on services                      |
| service\_notifications             | Permission to enable/disable notification on services                        |
| service\_passive\_checks           | Permission to enable/disable service passive checks                          |
| service\_schedule\_check           | Permission to schedule a service check                                       |
| service\_schedule\_downtime        | Permission to schedule a downtime on a service                               |
| service\_schedule\_forced\_check   | Permission to schedule a service forced check                                |
| service\_submit\_result            | Permission to submit a passive check result to a service                     |
| top\_counter                       | Permission to see the quick status overview (top right corner of the screen) |

### Menu ACL

Object name: **ACLMENU**

#### Show

In order to list available ACL Menus, use the **SHOW** action:

``` shell
centreon -u admin -p centreon -o ACLMENU -a show 
id;name;alias;comment;activate
1;Configuration;Configuration;;1
2;Monitoring + Home;Monitoring + Home;;1
3;Reporting;Reporting;;1
4;Graphs;Graphs;just a comment;1
[...]
```

Columns are the following :

| Column   | Description                             |
| -------- | --------------------------------------- |
| ID       | ID                                      |
| Name     | Name                                    |
| Alias    | Alias                                   |
| Comment  | Comment                                 |
| Activate | 1 when ACL Menu is enabled, 0 otherwise |

#### Add

In order to add an ACL Menu, use the **ADD** action:

``` shell
centreon -u admin -p centreon -o ACLMENU -a add -v "ACL Menu test;my alias"
```

Required fields are:

| Column | Description |
| ------ | ----------- |
| Name   | Name        |
| Alias  | Alias       |

#### Del

If you want to remove an ACL Menu, use the **DEL** action. The Name is used for identifying the ACL Menu to delete:

``` shell
centreon -u admin -p centreon -o ACLMENU -a del -v "ACL Menu test"
```

#### Setparam

If you want to change a specific parameter of an ACL Menu, use the **SETPARAM** action. The Name is used for identifying
the ACL Menu to update:

``` shell
centreon -u admin -p centreon -o ACLMENU -a setparam -v "ACL Menu test;alias;my new alias" 
```

Arguments are composed of the following columns:

| Order | Column description    |
| ----- | --------------------- |
| 1     | Name of ACL menu rule |
| 2     | Parameter name        |
| 3     | Parameter value       |

Parameters that you may change are:

| Column   | Description                             |
| -------- | --------------------------------------- |
| name     | Name                                    |
| alias    | Alias                                   |
| activate | 1 when ACL Menu is enabled, 0 otherwise |
| comment  | Comment                                 |

#### Getaclgroup

If you want to retrieve the ACL Groups that are linked to a specific ACL Menu, use the **GETACLGROUP** action:

``` shell
centreon -u admin -p centreon -o ACLMENU -a getaclgroup -v "ACL Menu test"
id;name
1;ALL
3;Operators
```

Arguments are composed of the following columns:

| Order | Column description    |
| ----- | --------------------- |
| 1     | Name of ACL menu rule |

#### Grant and Revoke

If you want to grant in Read/Write, Read Only or revoke menus in an ACL Menu rule definition, use the following actions:
**GRANTRW**, **GRANTRO**, **REVOKE**

Let's assume that you would like to grant full access to the \[Monitoring\] menu in your ACL Menu rule:

``` shell
centreon -u admin -p centreon -o ACLMENU -a grantrw -v "ACL Menu test;1;Monitoring"
```

Then, you would like to grant access to the \[Home\] \> \[Poller statistics\] menu:

``` shell
centreon -u admin -p centreon -o ACLMENU -a grantrw -v "ACL Menu test;1;Home;Poller statistics"
```

Then, you would like to grant access in read only to the \[Configuration\] \> \[Hosts\] menu:

``` shell
centreon -u admin -p centreon -o ACLMENU -a grantro -v "ACL Menu test;1;Configuration;Hosts"
```

Then, you decide to revoke access from \[Monitoring\] \> \[Event Logs\]:

``` shell
centreon -u admin -p centreon -o ACLMENU -a revoke -v "ACL Menu test;1;Monitoring;Event Logs"
```

Arguments are composed of the following columns:

| Order | Column description          |
| ----- | --------------------------- |
| 1     | Name of ACL menu rule       |
| 2     | Grant/revoke children menus |
| 3     | Menu name to grant/revoke   |
| n     | Possible sub menu name      |

### Resource ACL

Object name: **ACLRESOURCE**

#### Show

In order to list available ACL Resources, use the **SHOW** action:

``` shell
centreon -u admin -p centreon -o ACLRESOURCE -a show 
id;name;alias;comment;activate
1;All Resources;All Resources;;1
[...]
```

Columns are the following :

| Column   | Description                                 |
| -------- | ------------------------------------------- |
| ID       | ID                                          |
| Name     | Name                                        |
| Alias    | Alias                                       |
| Comment  | Comment                                     |
| Activate | 1 when ACL Resource is enabled, 0 otherwise |

#### Add

In order to add an ACL Resource, use the **ADD** action:

``` shell
centreon -u admin -p centreon -o ACLRESOURCE -a add -v "ACL Resource test;my alias" 
```

Required fields are:

| Column | Description |
| ------ | ----------- |
| Name   | Name        |
| Alias  | Alias       |

#### Del

If you want to remove an ACL Resource, use the **DEL** action. The Name is used for identifying the ACL Resource to
delete:

``` shell
centreon -u admin -p centreon -o ACLRESOURCE -a del -v "ACL Resource test" 
```

#### Setparam

If you want to change a specific parameter of an ACL Resource, use the **SETPARAM** action. The Name is used for
identifying the ACL Resource to update:

``` shell
centreon -u admin -p centreon -o ACLRESOURCE -a setparam -v "ACL Resource test;alias;my new alias" 
```

Arguments are composed of the following columns:

| Order | Column description        |
| ----- | ------------------------- |
| 1     | Name of ACL resource rule |
| 2     | Parameter name            |
| 3     | Parameter value           |

Parameters that you may change are:

| Column   | Description                                 |
| -------- | ------------------------------------------- |
| name     | Name                                        |
| alias    | Alias                                       |
| activate | 1 when ACL Resource is enabled, 0 otherwise |

#### Getaclgroup

If you want to retrieve the ACL Groups that are linked to a specific ACL Resource, use the **GETACLGROUP** action:

``` shell
centreon -u admin -p centreon -o ACLRESOURCE -a getaclgroup -v "ACL Resource test"
id;name
1;ALL
3;Operators
```

Arguments are composed of the following columns:

| Order | Column description |
| ----- | ------------------ |
| 1     | Name of ACL group  |

#### Grant and revoke

Arguments are composed of the following columns:

| Order | Column description |
| ----- | ------------------ |
| 1     | Name of ACL group  |
| 2     | Name of resource   |

If you want to grant or revoke resources in an ACL Resource rule definition, use the following commands:

| Command                    | Description                  | Example                                                                | Wildcard '\*' supported |
| -------------------------- | ---------------------------- | ---------------------------------------------------------------------- | ----------------------- |
| grant\_host                | Put host name(s)             | \[...\] -a grant\_host -v "ACL Resource Test;srv-esx"                  | Yes                     |
| grant\_hostgroup           | Put hostgroup name(s)        | \[...\] -a grant\_hostgroup -v "ACL Resource Test;Linux servers"       | Yes                     |
| grant\_servicegroup        | Put servicegroup name(s)     | \[...\] -a grant\_servicegroup -v "ACL Resource Test;Ping"             | Yes                     |
| grant\_metaservice         | Put metaservice name(s)      | \[...\] -a grant\_metaservice -v "ACL Resource Test;Traffic Average"   | No                      |
| addhostexclusion           | Put host name(s)             | \[...\] -a addhostexclusion -v "ACL Resource Test;srv-test"            | No                      |
| revoke\_host               | Put host name(s)             | \[...\] -a revoke\_host -v "ACL Resource Test;srv-esx"                 | Yes                     |
| revoke\_hostgroup          | Put hostgroup name(s)        | \[...\] -a revoke\_hostgroup -v "ACL Resource Test;Linux servers"      | Yes                     |
| revoke\_servicegroup       | Put servicegroup name(s)     | \[...\] -a revoke\_servicegroup -v "ACL Resource Test;Ping"            | Yes                     |
| revoke\_metaservice        | Put metaservice name(s)      | \[...\] -a revoke\_metaservice -v "ACL Resource Test;Traffic Average"  | Yes                     |
| delhostexclusion           | Put host name(s)             | \[...\] -a delhostexclusion -v "ACL Resource Test;srv-test"            | Yes                     |
| addfilter\_instance        | Put instance name(s)         | \[...\] -a addfilter\_instance -v "ACL Resource Test;Monitoring-2"     | No                      |
| addfilter\_hostcategory    | Put host category name(s)    | \[...\] -a addfilter\_hostcategory -v "ACL Resource Test;Customer-1"   | No                      |
| addfilter\_servicecategory | Put service category name(s) | \[...\] -a addfilter\_servicecategory -v "ACL Resource Test;System"    | No                      |
| delfilter\_instance        | Put instance name(s)         | \[...\] -a delfilter\_instance -v "ACL Resource Test;Monitoring-2"     | Yes                     |
| delfilter\_hostcategory    | Put host category name(s)    | \[...\] -a delfilter\_hostcategory -v "ACL Resource Test;Customer-1"   | Yes                     |
| delfilter\_servicecategory | Put service category name(s) | \[...\] -a delfilter\_servicecategory -v "ACL Resource Test;System"    | Yes                     |

> ***NOTE:*** Use delimiter "|" for defining multiple resources.

### Centreon Broker

Object name: **CENTBROKERCFG**

#### Show

In order to list available Centreon Broker CFG, use the **SHOW** action:

``` shell
centreon -u admin -p centreon -o CENTBROKERCFG -a show
config id;config name;instance
1;Central CFG;Central
2;Sattelite CFG;Sattelite
[...]
```

Columns are the following:

| Order | Description                           |
| ----- | ------------------------------------- |
| 1     | ID                                    |
| 2     | Name of configuration                 |
| 3     | Instance that is linked to broker cfg |

#### Add

In order to add a Centreon Broker CFG, use the **ADD** action:

``` shell
centreon -u admin -p centreon -o CENTBROKERCFG -a add -v "broker cfg for poller test;Poller test"
```

Required fields are:

| Order | Description                           |
| ----- | ------------------------------------- |
| 1     | Name of configuration                 |
| 2     | Instance that is linked to broker cfg |

#### Del

If you want to remove a Centreon Broker CFG, use the **DEL** action. The Name is used for identifying the configuration
to delete:

``` shell
centreon -u admin -p centreon -o CENTBROKERCFG -a del -v "broker cfg for poller test"
```

#### Setparam

If you want to change a specific parameter of a Centreon Broker configuration, use the **SETPARAM** action. The
configuration name is used for identifying the configuration to update:

``` shell
centreon -u admin -p centreon -o CENTBROKERCFG -a setparam -v "broker cfg for poller test;name;new broker cfg name"
```

Arguments are composed of the following columns:

| Order | Column description                    |
| ----- | ------------------------------------- |
| 1     | Name of Centreon Broker configuration |
| 2     | Parameter name                        |
| 3     | Parameter value                       |

Parameters that you may change are:

| Column                  | Description                                                                   |
| ----------------------- | ----------------------------------------------------------------------------- |
| filename                | Filename of configuration (.json extension)                                   |
| name                    | Name of configuration                                                         |
| instance                | Instance that is linked to Centreon Broker CFG                                |
| event\_queue\_max\_size | Event queue max size (when number is reached, temporary output will be used). |
| cache\_directory        | Path for cache files                                                          |
| daemon                  | Link this configuration to cbd service (0 or 1)                               |
| pool\_size              | Number of threads used (by default, use the number of CPUs)                   |

#### Listinput, Listoutput and Listlogger

If you want to list specific input output types of Centreon Broker, use one of the following commands: listinput
listoutput listlogger

Example:

``` shell
centreon -u admin -p centreon -o CENTBROKERCFG -a listoutput -v "broker cfg for poller test"
id;name
1;Storage
2;RRD
3;PerfData
```

Columns are the following:

| Column | Description |
| ------ | ----------- |
| ID     | I/O ID      |
| Name   | I/O Name    |

#### Getinput, Getoutput and Getlogger

In order to get parameters of a specific I/O object, use one of the following commands:

* getinput
* getoutput
* getlogger

Example:

``` shell
centreon -u admin -p centreon -o CENTBROKERCFG -a getoutput -v "broker cfg for poller test;3"
parameter key;parameter value
db_host;localhost
db_name;centreon_storage
db_password;centreon
db_port;3306
db_type;mysql
db_user;centreon
interval;60
length;
name;PerfData
type;storage
```

The ID is used for identifying the I/O to get.

Columns are the following:

| Order  | Description                |
| ------ | -------------------------- |
| 1      | Parameter key of the I/O   |
| 2      | Parameter value of the I/O |

#### Addinput, Addoutput and Addlogger

In order to add a new I/O object, use one of the following commands:

* **ADDINPUT**
* **ADDOUTPUT**
* **ADDLOGGER**

Example:

``` shell
centreon -u admin -p centreon -o CENTBROKERCFG -a addlogger -v "broker cfg for poller test;/var/log/centreon-broker/central-module.log;file"
```

``` shell
centreon -u admin -p centreon -o CENTBROKERCFG -a listlogger -v "broker cfg for poller test"
id;name
1;/var/log/centreon-broker/central-module.log
```

Arguments are composed of the following columns:

| Order | Column description          |
| ----- | --------------------------- |
| 1     | Name of Centreon Broker CFG |
| 2     | Name of the I/O object      |
| 3     | Nature of I/O object        |

#### Delinput, Deloutput and Dellogger

In order to remove an I/O object from the Centreon Broker configuration, use one of the following commands:

* **DELINPUT**
* **DELOUTPUT**
* **DELLOGGER**

Example:

``` shell
centreon -u admin -p centreon -o CENTBROKERCFG -a dellogger -v "broker cfg for poller test;1"
```

The I/O ID is used for identifying the object to delete.

#### Setintput, Setoutput and Setlogger

In order to set parameters of an I/O object, use one of the following commands:

* **SETINPUT**
* **SETOUTPUT**
* **SETLOGGER**

Example:

``` shell
centreon -u admin -p centreon -o CENTBROKERCFG -a setlogger -v "broker cfg for poller test;1;debug;no"
```

Arguments are composed of the following columns:

| Order | Column description                                          |
| ----- | ----------------------------------------------------------- |
| 1     | Name of Centreon Broker CFG                                 |
| 2     | ID of I/O object                                            |
| 3     | Parameter name                                              |
| 4     | Parameter value, for multiple values, use the "," delimiter |

You may get help with the following CLAPI commands:

* **GETTYPELIST**
* **GETFIELDLIST**
* **GETVALUELIST**

Example:

``` shell
centreon -u admin -p centreon -o CENTBROKERCFG -a gettypelist -v "output"
type id;short name;name
27;bam_bi;BI engine (BAM)
16;sql;Broker SQL Database
32;correlation;Correlation
28;db_cfg_reader;Database configuration reader
29;db_cfg_writer;Database configuration writer
11;file;File
3;ipv4;IPv4
10;ipv6;IPv6
26;bam;Monitoring engine (BAM)
14;storage;Perfdata Generator (Centreon Storage)
13;rrd;RRD File Generator
30;graphite;Storage - Graphite
31;influxdb;Storage - InfluxDB
```

``` shell
centreon -u admin -p centreon -o CENTBROKERCFG -a getfieldlist -v "ipv4"
field id;short name;name
3;ca_certificate;Trusted CA's certificate;text
2;host;Host to connect to;text
46;negotiation;Enable negotiation;radio
48;one_peer_retention_mode;One peer retention;radio
1;port;Connection port;int
4;private_key;Private key file.;text
12;protocol*;Serialization Protocol;select
5;public_cert;Public certificate;text
6;tls;Enable TLS encryption;radio
```

> ***NOTE:*** Note that the "protocol" entry is followed by a star. This means that you have to use one of the possible values.

This is how you get the list of possible values of a given field:

``` shell
centreon -u admin -p centreon -o CENTBROKERCFG -a getvaluelist -v "protocol"
possible values
ndo
```

The following chapters describes the parameters of each Object type

ipv4:

<table>
<thead>
<tr class="header">
<th>ID</th>
<th>Label</th>
<th>Description</th>
<th>Possible values</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>buffering_timeout</p></td>
<td><p>Buffering timeout</p></td>
<td><p>Time in seconds to wait before launching failover.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="even">
<td><p>compression</p>
<p>compression_buffer</p>
<p>compression_level</p></td>
<td><p>Compression (zlib)</p>
<p>Compression buffer size</p>
<p>Compression level</p></td>
<td><p>Enable or not data stream compression.</p>
<p>The higher the buffer size is, the best compression. This however increase data streaming latency. Use with caution.</p>
<p>Ranges from 0 (no compression) to 9 (best compression). Default is -1 (zlib compression)</p></td>
<td><ul>
<li></li>
<li></li>
<li></li>
</ul></td>
</tr>
<tr class="odd">
<td><p>retry_interval</p></td>
<td><p>Retry interval</p></td>
<td><p>Time in seconds to wait between each connection attempt.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="even">
<td><p>category</p></td>
<td><p>Filter category</p></td>
<td><p>Category filter for flux in input</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="odd">
<td><p>ca_certificate</p>
<p>host</p></td>
<td><p>Trusted CA's certificate</p>
<p>Host to connect to</p></td>
<td><p>Trusted CA's certificate.</p>
<p>IP address or hostname of the host to connect to (leave blank for listening mode).</p></td>
<td><ul>
<li></li>
<li></li>
</ul></td>
</tr>
<tr class="even">
<td><p>one_peer_retention_mode</p>
<p>port</p></td>
<td><p>One peer retention</p>
<p>Connection port</p></td>
<td><p>This allows the retention to work even if the socket is listening</p>
<p>Port to listen on (empty host) or to connect to (with host filled).</p></td>
<td><ul>
<li></li>
<li></li>
</ul></td>
</tr>
<tr class="odd">
<td><p>private_key</p></td>
<td><p>Private key file.</p></td>
<td><p>Private key file path when TLS encryption is used.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="even">
<td><p>protocol</p></td>
<td><p>Serialization protocol</p></td>
<td><p>Serialization protocol.</p></td>
<td><p>ndo</p></td>
</tr>
<tr class="odd">
<td><p>public_cert</p></td>
<td><p>Public certificate</p></td>
<td><p>Public certificate file path when TLS encryption is used.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="even">
<td><p>tls</p></td>
<td><p>Enable TLS encryption</p></td>
<td><p>Enable TLS encryption.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
</tbody>
</table>

ipv6:

<table>
<thead>
<tr class="header">
<th>ID</th>
<th>Label</th>
<th>Description</th>
<th>Possible values</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>buffering_timeout</p></td>
<td><p>Buffering timeout</p></td>
<td><p>Time in seconds to wait before launching failover.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="even">
<td><p>compression</p>
<p>compression_buffer</p>
<p>compression_level</p></td>
<td><p>Compression (zlib)</p>
<p>Compression buffer size</p>
<p>Compression level</p></td>
<td><p>Enable or not data stream compression.</p>
<p>The higher the buffer size is, the best compression. This however increase data streaming latency. Use with caution.</p>
<p>Ranges from 0 (no compression) to 9 (best compression). Default is -1 (zlib compression)</p></td>
<td><ul>
<li></li>
<li></li>
<li></li>
</ul></td>
</tr>
<tr class="odd">
<td><p>retry_interval</p></td>
<td><p>Retry interval</p></td>
<td><p>Time in seconds to wait between each connection attempt.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="even">
<td><p>category</p></td>
<td><p>Filter category</p></td>
<td><p>Category filter for flux in input</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="odd">
<td><p>ca_certificate</p>
<p>host</p></td>
<td><p>Trusted CA's certificate</p>
<p>Host to connect to</p></td>
<td><p>Trusted CA's certificate.</p>
<p>IP address or hostname of the host to connect to (leave blank for listening mode).</p></td>
<td><ul>
<li></li>
<li></li>
</ul></td>
</tr>
<tr class="even">
<td><p>one_peer_retention_mode</p>
<p>port</p></td>
<td><p>One peer retention</p>
<p>Connection port</p></td>
<td><p>This allows the retention to work even if the socket is listening</p>
<p>Port to listen on (empty host) or to connect to (with host filled).</p></td>
<td><ul>
<li></li>
<li></li>
</ul></td>
</tr>
<tr class="odd">
<td><p>private_key</p></td>
<td><p>Private key file.</p></td>
<td><p>Private key file path when TLS encryption is used.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="even">
<td><p>protocol</p></td>
<td><p>Serialization protocol</p></td>
<td><p>Serialization protocol.</p></td>
<td><p>ndo</p></td>
</tr>
<tr class="odd">
<td><p>public_cert</p></td>
<td><p>Public certificate</p></td>
<td><p>Public certificate file path when TLS encryption is used.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="even">
<td><p>tls</p></td>
<td><p>Enable TLS encryption</p></td>
<td><p>Enable TLS encryption.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
</tbody>
</table>

file:

<table>
<thead>
<tr class="header">
<th>ID</th>
<th>Label</th>
<th>Description</th>
<th>Possible values</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>buffering_timeout</p></td>
<td><p>Buffering timeout</p></td>
<td><p>Time in seconds to wait before launching failover.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="even">
<td><p>compression</p>
<p>compression_buffer</p>
<p>compression_level</p></td>
<td><p>Compression (zlib)</p>
<p>Compression buffer size</p>
<p>Compression level</p></td>
<td><p>Enable or not data stream compression.</p>
<p>The higher the buffer size is, the best compression. This however increase data streaming latency. Use with caution.</p>
<p>Ranges from 0 (no compression) to 9 (best compression). Default is -1 (zlib compression)</p></td>
<td><ul>
<li></li>
<li></li>
<li></li>
</ul></td>
</tr>
<tr class="odd">
<td><p>retry_interval</p></td>
<td><p>Retry interval</p></td>
<td><p>Time in seconds to wait between each connection attempt.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="even">
<td><p>max_size</p></td>
<td><p>Maximum size of file</p></td>
<td><p>Maximum size in bytes.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="odd">
<td><p>path</p></td>
<td><p>File path</p></td>
<td><p>Path to the file.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="even">
<td><p>protocol</p></td>
<td><p>Serialization protocol</p></td>
<td><p>Serialization protocol.</p></td>
<td><p>ndo</p></td>
</tr>
</tbody>
</table>

#### logger

file:

<table>
<thead>
<tr class="header">
<th>ID</th>
<th>Label</th>
<th>Description</th>
<th>Possible values</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>config</p></td>
<td><p>Configuration messages</p></td>
<td><p>Enable or not configuration messages logging.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="even">
<td><p>debug</p></td>
<td><p>Debug messages</p></td>
<td><p>Enable or not debug messages logging.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="odd">
<td><p>error</p></td>
<td><p>Error messages</p></td>
<td><p>Enable or not error messages logging.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="even">
<td><p>info</p></td>
<td><p>Informational messages</p></td>
<td><p>Enable or not informational messages logging.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="odd">
<td><p>level</p></td>
<td><p>Logging level</p></td>
<td><p>How much messages must be logged.</p></td>
<td><p>high,low,medium</p></td>
</tr>
<tr class="even">
<td><p>max_size</p>
<p>name</p></td>
<td><p>Max file size in bytes</p>
<p>Name of the logger</p></td>
<td><p>The maximum size of log file.</p>
<p>For a file logger this is the path to the file. For a standard logger, one of 'stdout' or 'stderr'.</p></td>
<td><ul>
<li></li>
<li></li>
</ul></td>
</tr>
</tbody>
</table>

standard:

<table>
<thead>
<tr class="header">
<th>ID</th>
<th>Label</th>
<th>Description</th>
<th>Possible values</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>config</p></td>
<td><p>Configuration messages</p></td>
<td><p>Enable or not configuration messages logging.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="even">
<td><p>debug</p></td>
<td><p>Debug messages</p></td>
<td><p>Enable or not debug messages logging.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="odd">
<td><p>error</p></td>
<td><p>Error messages</p></td>
<td><p>Enable or not error messages logging.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="even">
<td><p>info</p></td>
<td><p>Informational messages</p></td>
<td><p>Enable or not informational messages logging.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="odd">
<td><p>level</p>
<p>name</p></td>
<td><p>Logging level</p>
<p>Name of the logger</p></td>
<td><p>How much messages must be logged.</p>
<p>For a file logger this is the path to the file. For a standard logger, one of 'stdout' or 'stderr'.</p></td>
<td><p>high,low,medium</p>
<ul>
<li></li>
</ul></td>
</tr>
</tbody>
</table>

syslog:

<table>
<thead>
<tr class="header">
<th>ID</th>
<th>Label</th>
<th>Description</th>
<th>Possible values</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>config</p></td>
<td><p>Configuration messages</p></td>
<td><p>Enable or not configuration messages logging.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="even">
<td><p>debug</p></td>
<td><p>Debug messages</p></td>
<td><p>Enable or not debug messages logging.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="odd">
<td><p>error</p></td>
<td><p>Error messages</p></td>
<td><p>Enable or not error messages logging.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="even">
<td><p>info</p></td>
<td><p>Informational messages</p></td>
<td><p>Enable or not informational messages logging.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="odd">
<td><p>level</p></td>
<td><p>Logging level</p></td>
<td><p>How much messages must be logged.</p></td>
<td><p>high,low,medium</p></td>
</tr>
</tbody>
</table>

monitoring:

<table>
<thead>
<tr class="header">
<th>ID</th>
<th>Label</th>
<th>Description</th>
<th>Possible values</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>config</p></td>
<td><p>Configuration messages</p></td>
<td><p>Enable or not configuration messages logging.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="even">
<td><p>debug</p></td>
<td><p>Debug messages</p></td>
<td><p>Enable or not debug messages logging.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="odd">
<td><p>error</p></td>
<td><p>Error messages</p></td>
<td><p>Enable or not error messages logging.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="even">
<td><p>info</p></td>
<td><p>Informational messages</p></td>
<td><p>Enable or not informational messages logging.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="odd">
<td><p>level</p>
<p>name</p></td>
<td><p>Logging level</p>
<p>Name of the logger</p></td>
<td><p>How much messages must be logged.</p>
<p>For a file logger this is the path to the file. For a standard logger, one of 'stdout' or 'stderr'.</p></td>
<td><p>high,low,medium</p>
<ul>
<li></li>
</ul></td>
</tr>
</tbody>
</table>

##### output

ipv4:

| ID                         | Label                    | Description                                                                                                          | Possible values |
| -------------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------- | --------------- |
| buffering\_timeout         | Buffering timeout        | Time in seconds to wait before launching failover.                                                                   | \-              |
| compression                | Compression (zlib)       | Enable or not data stream compression.                                                                               | \-              |
| compression\_buffer        | Compression buffer size  | The higher the buffer size is, the best compression. This however increase data streaming latency. Use with caution. | \-              |
| compression\_level         | Compression level        | Ranges from 0 (no compression) to 9 (best compression). Default is -1 (zlib compression)                             | \-              |
| retry\_interval            | Retry interval           | Time in seconds to wait between each connection attempt.                                                             | \-              |
| category                   | Filter category          | Category filter for flux in input                                                                                    | \-              |
| ca\_certificate            | Trusted CA's certificate | Trusted CA's certificate.                                                                                            | \-              |
| host                       | Host to connect to       | IP address or hostname of the host to connect to (leave blank for listening mode).                                   | \-              |
| one\_peer\_retention\_mode | one peer retention       | This allows the retention to work even if the socket is listening                                                    | \-              |
| port                       | Connection port          | Port to listen on (empty host) or to connect to (with host filled).                                                  | \-              |
| private\_key               | Private key file.        | Private key file path when TLS encryption is used.                                                                   | \-              |
| protocol                   | Serialization protocol   | Serialization protocol.                                                                                              | ndo             |
| public\_cert               | Public certificate       | Public certificate file path when TLS encryption is used.                                                            | \-              |
| tls                        | Enable TLS encryption    | Enable TLS encryption                                                                                                | \-              |

ipv6:

| ID                         | Label                    | Description                                                                                                          | Possible values |
| -------------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------- | --------------- |
| buffering\_timeout         | Buffering timeout        | Time in seconds to wait before launching failover.                                                                   | \-              |
| compression                | Compression (zlib)       | Enable or not data stream compression.                                                                               | \-              |
| compression\_buffer        | Compression buffer size  | The higher the buffer size is, the best compression. This however increase data streaming latency. Use with caution. | \-              |
| compression\_level         | Compression level        | Ranges from 0 (no compression) to 9 (best compression). Default is -1 (zlib compression)                             | \-              |
| retry\_interval            | Retry interval           | Time in seconds to wait between each connection attempt.                                                             | \-              |
| category                   | Filter category          | Category filter for flux in input                                                                                    | \-              |
| ca\_certificate            | Trusted CA's certificate | Trusted CA's certificate.                                                                                            | \-              |
| host                       | Host to connect to       | IP address or hostname of the host to connect to (leave blank for listening mode).                                   | \-              |
| one\_peer\_retention\_mode | one peer retention       | This allows the retention to work even if the socket is listening                                                    | \-              |
| port                       | Connection port          | Port to listen on (empty host) or to connect to (with host filled).                                                  | \-              |
| private\_key               | Private key file.        | Private key file path when TLS encryption is used.                                                                   | \-              |
| protocol                   | Serialization protocol   | Serialization protocol.                                                                                              | ndo             |
| public\_cert               | Public certificate       | Public certificate file path when TLS encryption is used.                                                            | \-              |
| tls                        | Enable TLS encryption    | Enable TLS encryption                                                                                                | \-              |

file:

| ID                  | Label                   | Description                                                                                                          | Possible values |
| ------------------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------- | --------------- |
| buffering\_timeout  | Buffering timeout       | Time in seconds to wait before launching failover.                                                                   | \-              |
| compression         | Compression (zlib)      | Enable or not data stream compression.                                                                               | \-              |
| compression\_buffer | Compression buffer size | The higher the buffer size is, the best compression. This however increase data streaming latency. Use with caution. | \-              |
| compression\_level  | Compression level       | Ranges from 0 (no compression) to 9 (best compression). Default is -1 (zlib compression)                             | \-              |
| failover            | Failover name           | Name of the output which will act as failover                                                                        | \-              |
| retry\_interval     | Retry interval          | Time in seconds to wait between each connection attempt.                                                             | \-              |
| category            | Filter category         | Category filter for flux in output.                                                                                  | \-              |
| max\_size           | Maximum size of file    | Maximum size in bytes.                                                                                               | \-              |
| path                | File path               | Path to the file.                                                                                                    | \-              |
| protocol            | Serialization protocol  | Serialization protocol.                                                                                              | ndo             |

rrd:

<table>
<thead>
<tr class="header">
<th>ID</th>
<th>Label</th>
<th>Description</th>
<th>Possible values</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>buffering_timeout</p></td>
<td><p>Buffering timeout</p></td>
<td><p>Time in seconds to wait before launching failover.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="even">
<td><p>failover</p></td>
<td><p>Failover name</p></td>
<td><p>Name of the output which will act as failover</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="odd">
<td><p>retry_interval</p></td>
<td><p>Retry interval</p></td>
<td><p>Time in seconds to wait between each connection attempt.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="even">
<td><p>category</p></td>
<td><p>Filter category</p></td>
<td><p>Category filter for flux in output.</p></td>
<td><blockquote>
<ul>
<li></li>
</ul>
</blockquote></td>
</tr>
<tr class="odd">
<td><p>metrics_path</p>
<p>path</p>
<p>port</p></td>
<td><p>RRD file directory for metrics</p>
<p>Unix socket</p>
<p>TCP port</p></td>
<td><p>RRD file directory, for example /var/lib/centreon/metrics</p>
<p>The Unix socket used to communicate with rrdcached. This is a global option, go to Administration &gt; Options &gt; RRDTool to modify it.</p>
<p>The TCP port used to communicate with rrdcached. This is a global option, go to Administration &gt; Options &gt; RRDTool to modify it.</p></td>
<td><ul>
<li></li>
<li></li>
<li></li>
</ul></td>
</tr>
<tr class="even">
<td><p>status_path</p></td>
<td><p>RRD file directory for statuses</p></td>
<td><p>RRD file directory, for example /var/lib/centreon/status</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="odd">
<td><p>write_metrics</p></td>
<td><p>Enable write_metrics</p></td>
<td><p>Enable or not write_metrics.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="even">
<td><p>write_status</p></td>
<td><p>Enable write_status</p></td>
<td><p>Enable or not write_status.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="odd">
<td><p>store_in_data_bin</p></td>
<td><p>Enable store_in_data_bin</p></td>
<td><p>Enable or not store in performance data in data_bin.</p></td>
<td><blockquote>
<ul>
<li></li>
</ul>
</blockquote></td>
</tr>
</tbody>
</table>

storage:

<table>
<thead>
<tr class="header">
<th>ID</th>
<th>Label</th>
<th>Description</th>
<th>Possible values</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>buffering_timeout</p></td>
<td><p>Buffering timeout</p></td>
<td><p>Time in seconds to wait before launching failover.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="even">
<td><p>failover</p></td>
<td><p>Failover name</p></td>
<td><p>Name of the output which will act as failover</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="odd">
<td><p>retry_interval</p></td>
<td><p>Retry interval</p></td>
<td><p>Time in seconds to wait between each connection attempt.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="even">
<td><p>category</p>
<p>check_replication</p></td>
<td><p>Filter category</p>
<p>Replication enabled</p></td>
<td><p>Category filter for flux in output.</p>
<p>When enabled, the broker engine will check whether or not the replication is up to date before attempting to update data.</p></td>
<td><blockquote>
<ul>
<li></li>
</ul>
</blockquote>
<ul>
<li></li>
</ul></td>
</tr>
<tr class="odd">
<td><p>db_host</p></td>
<td><p>DB host</p></td>
<td><p>IP address or hostname of the database server.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="even">
<td><p>db_name</p></td>
<td><p>DB name</p></td>
<td><p>Database name.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="odd">
<td><p>db_password</p></td>
<td><p>DB password</p></td>
<td><p>Password of database user.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="even">
<td><p>db_port</p></td>
<td><p>DB port</p></td>
<td><p>Port on which the DB server listens</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="odd">
<td><p>db_type</p></td>
<td><p>DB type</p></td>
<td><p>Target DBMS.</p></td>
<td><p>db2,ibase,mysql,oci,odbc,postgresql,sqlite,tds</p></td>
</tr>
<tr class="even">
<td><p>db_user</p></td>
<td><p>DB user</p></td>
<td><p>Database user.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="odd">
<td><p>interval</p></td>
<td><p>Interval length</p></td>
<td><p>Interval length in seconds.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="even">
<td><p>length</p></td>
<td><p>RRD length</p></td>
<td><p>RRD storage duration in seconds.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="odd">
<td><p>queries_per_transaction</p></td>
<td><p>Maximum queries per transaction</p></td>
<td><p>The maximum queries per transaction before commit.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="even">
<td><p>read_timeout</p>
<p>rebuild_check_interval</p></td>
<td><p>Transaction commit timeout</p>
<p>Rebuild check interval in seconds</p></td>
<td><p>The transaction timeout before running commit.</p>
<p>The interval between check if some metrics must be rebuild. The default value is 300s</p></td>
<td><ul>
<li></li>
<li></li>
</ul></td>
</tr>
<tr class="odd">
<td><p>store_in_data_bin</p></td>
<td><p>Enable store_in_data_bin</p></td>
<td><p>Enable or not store in performance data in data_bin.</p></td>
<td><blockquote>
<ul>
<li></li>
</ul>
</blockquote></td>
</tr>
</tbody>
</table>

sql:

<table>
<thead>
<tr class="header">
<th>ID</th>
<th>Label</th>
<th>Description</th>
<th>Possible values</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>buffering_timeout</p></td>
<td><p>Buffering timeout</p></td>
<td><p>Time in seconds to wait before launching failover.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="even">
<td><p>failover</p></td>
<td><p>Failover name</p></td>
<td><p>Name of the output which will act as failover</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="odd">
<td><p>retry_interval</p></td>
<td><p>Retry interval</p></td>
<td><p>Time in seconds to wait between each connection attempt.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="even">
<td><p>category</p>
<p>check_replication</p></td>
<td><p>Filter category</p>
<p>Replication enabled</p></td>
<td><p>Category filter for flux in output.</p>
<p>When enabled, the broker engine will check whether or not the replication is up to date before attempting to update data.</p></td>
<td><blockquote>
<ul>
<li></li>
</ul>
</blockquote>
<ul>
<li></li>
</ul></td>
</tr>
<tr class="odd">
<td><p>db_host</p></td>
<td><p>DB host</p></td>
<td><p>IP address or hostname of the database server.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="even">
<td><p>db_name</p></td>
<td><p>DB name</p></td>
<td><p>Database name.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="odd">
<td><p>db_password</p></td>
<td><p>DB password</p></td>
<td><p>Password of database user.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="even">
<td><p>db_port</p></td>
<td><p>DB port</p></td>
<td><p>Port on which the DB server listens</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="odd">
<td><p>db_type</p></td>
<td><p>DB type</p></td>
<td><p>Target DBMS.</p></td>
<td><p>db2,ibase,mysql,oci,odbc,postgresql,sqlite,tds</p></td>
</tr>
<tr class="even">
<td><p>db_user</p></td>
<td><p>DB user</p></td>
<td><p>Database user.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="odd">
<td><p>queries_per_transaction</p></td>
<td><p>Maximum queries per transaction</p></td>
<td><p>The maximum queries per transaction before commit.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
<tr class="even">
<td><p>read_timeout</p></td>
<td><p>Transaction commit timeout</p></td>
<td><p>The transaction timeout before running commit.</p></td>
<td><ul>
<li></li>
</ul></td>
</tr>
</tbody>
</table>

### Centreon Engine

Object name: **ENGINECFG**

#### Show

In order to list available Centreon Engine conf, use the **SHOW** action:

``` shell
centreon -u admin -p centreon -o ENGINECFG -a show 
id;name;instance;comment
1;Centreon Engine CFG 1;Central;Default CentreonEngine.cfg
[...]
```

Columns are the following :

| Order | Description                                    |
| ----- | ---------------------------------------------- |
| 1     | Centreon Engine ID                             |
| 2     | Centreon Engine configuration name             |
| 3     | Instance that is linked to centreon-engine.cfg |
| 4     | Comments regarding the configuration file      |

#### Add

In order to add a Centreon Engine conf, use the **ADD** action:

``` shell
centreon -u admin -p centreon -o ENGINECFG -a add -v "Centreon Engine cfg for poller NY;Poller-NY;Just a small comment" 
```

Required fields are:

| Order | Description                                    |
| ----- | ---------------------------------------------- |
| 1     | Centreon Engine configuration name             |
| 2     | Instance that is linked to centreon-engine.cfg |
| 3     | Comment regarding the configuration file       |

#### Del

If you want to remove a Centreon Engine conf, use the **DEL** action. The name is used for identifying the configuration
to delete:

``` shell
centreon -u admin -p centreon -o ENGINECFG -a del -v "Centreon Engine cfg for poller NY" 
```

#### Setparam

If you want to change a specific parameter of a Centreon Engine conf, use the **SETPARAM** action. The name is used for
identifying the configuration to update:

``` shell
centreon -u admin -p centreon -o ENGINECFG -a setparam -v "Centreon Engine cfg for poller NY;cfg_dir;/usr/local/nagios/etc" 
```

Arguments are composed of the following columns:

| Order | Column description                    |
| ----- | ------------------------------------- |
| 1     | Name of Centreon Engine configuration |
| 2     | Parameter name                        |
| 3     | Parameter value                       |

Parameters that you may change are:

| Column           | Description                                                                                                                                                                                                |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nagios\_name     | Name                                                                                                                                                                                                       |
| instance         | Instance that is linked to centreon-engine.cfg                                                                                                                                                             |
| broker\_module   | example: \[...\] -v "Engine CFG NY;broker\_module;/usr/lib64/nagios/cbmod.so /etc/centreon-broker/central-module.json", you can use a &#124; delimiter for defining multiple broker modules          |
| nagios\_activate | *1* if activated, *0* otherwise                                                                                                                                                                            |
| \*               | Centreon CLAPI handles pretty much all the options available in a centreon-engine configuration file. Because the list is quite long, it is best to refer to the official documentation of Centreon Engine |

#### Addbrokermodule

If you want to add new broker module without removing existing modules, use the **ADDBROKERMODULE**:  

``` shell
centreon -u admin -p centreon -o ENGINECFG -a addbrokermodule -v "Centreon Engine cfg for poller NY;/usr/lib64/centreon-engine/externalcmd.so"
```

Arguments are composed of the following columns:

| Order | Column description                    |
| ----- | ------------------------------------- |
| 1     | Name of Centreon Engine configuration |
| 2     | Module name                           |

To add multiple modules in one line, it will put the separator "/etc/centreon-broker/central-module.json"

#### Delbrokermodule

If you want to delete broker module, use the **DELBROKERMODULE**:  

``` shell
centreon -u admin -p centreon -o ENGINECFG -a delbrokermodule -v "Centreon Engine cfg for poller NY;/usr/lib64/centreon-engine/externalcmd.so"
```

Arguments are composed of the following columns:

| Order | Column description                    |
| ----- | ------------------------------------- |
| 1     | Name of Centreon Engine configuration |
| 2     | Module name                           |

To delete multiple modules in one line, it will put the separator "/etc/centreon-broker/central-module.json"

### Commands

Object name: **CMD**

#### Show

In order to list available commands, use **SHOW** action:

``` shell
centreon -u admin -p centreon -o CMD -a show 
id;name;type;line
1;check-ping;check;$USER1$/check_ping -H $HOSTADDRESS$ -w $ARG1$ -c $ARG2$
2;check_dummy;check;$USER1$/check_dummy -o $ARG1$ -s $ARG2$
[...]
```

Columns are the following:

| Column       | Description                                       |
| ------------ | ------------------------------------------------- |
| Command ID   |                                                   |
| Command name |                                                   |
| Command type | *check*, *notif*, *misc* or *discovery*           |
| Command line | System command line that will be run on execution |

#### Add

In order to add a command use **ADD** action:

``` shell
centreon -u admin -p centreon -o CMD -a ADD -v 'check-host-alive;check;$USER1$/check_ping -H $HOSTADDRESS$ -w 3000.0,80% -c 5000.0,100% -p 1'
```

Required columns are the following:

| Column       | Description                                       |
| ------------ | ------------------------------------------------- |
| Command name |                                                   |
| Command type | *check*, *notif*, *misc* or *discovery*           |
| Command line | System command line that will be run on execution |

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Del

If you want to remove a command use **DEL** action:

``` shell
centreon -u admin -p centreon -o CMD -a del -v 'check-host-alive'
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Setparam

If you want to change a specific parameters for a command, use the **SETPARAM** command:

``` shell
centreon -u admin -p centreon -o CMD -a setparam -v 'check-host-alive;type;notif'
centreon -u admin -p centreon -o CMD -a setparam -v 'check-host-alive;name;check-host-alive2'
```

Parameters that you can change are the following:

| Parameter | Description                             |
| --------- | --------------------------------------- |
| name      | Name of command                         |
| line      | Command line                            |
| type      | *check*, *notif*, *misc* or *discovery* |
| graph     | Graph template applied on command       |
| example   | Example of arguments (i.e: \!80\!90)    |
| comment   | Comments regarding the command          |

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Getargumentdescr

To retrieve the argument descriptions for a command, use the **getargumentdescr** command:

``` shell
centreon -u admin -p centreon -o CMD -a getargumentdesc -v 'test-cmd'
name;description
ARG0;First Argument ARG1;Second Argument
```

#### Setargumentdescr

If you want to change all arguments descriptions for a command, use the **setargumentdescr** command:

``` shell
centreon -u admin -p centreon -o CMD -a setargumentdescr -v 'check_centreon_ping;ARG1:count;ARG2:warning;ARG3:critical'
```

### Contact Groups

Object name: **CG**

#### Show

In order to list available contact groups, use the **SHOW** action:

``` shell
centreon -u admin -p centreon -o CG -a show
id;name;alias;members
Guest;Guests Group;guest-user1,guest-user2
Supervisors;Centreon supervisors;Admin
```

Columns are the following:

| Column  | Description                                    |
| ------- | ---------------------------------------------- |
| Name    |                                                |
| Alias   |                                                |
| Members | List of contacts that are in the contact group |

#### Add

In order to add a contact group, use the **ADD** action:

``` shell
centreon -u admin -p centreon -o CG -a ADD -v "Windows;Windows admins"
```

Required fields are the following:

| Column | Description |
| ------ | ----------- |
| Name   | Name        |
| Alias  | Alias       |

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Del

In order to delete one contact group, use the **DEL** action:

``` shell
centreon -u admin -p centreon -o CG -a DEL -v "Windows"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Setparam

In order to change the name or the alias of a contactgroup, use the **SETPARAM** action:

``` shell
centreon -u admin -p centreon -o CG -a setparam -v "Windows;name;Windows-2K"
centreon -u admin -p centreon -o CG -a setparam -v "Cisco;alias;Cisco-Routers"
```

Parameters that you can change are the following:

| Parameter | Description |
| --------- | ----------- |
| name      | Name        |
| alias     | Alias       |

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Enable

In order to enable a contact group, use the **ENABLE** action:

``` shell
centreon -u admin -p centreon -o CG -a enable -v "Guest" 
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Disable

In order to disable a contact group, use the **DISABLE** action:

``` shell
centreon -u admin -p centreon -o CG -a disable -v "Guest"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Getcontact

In order to view the contact list of a contact group, use the **GETCONTACT** action:

``` shell
centreon -u admin -p centreon -o CG -a getcontact -v "Guest"
id;name
1;User1
2;User2
```

Columns are the following:

| Column | Description     |
| ------ | --------------- |
| ID     | Id of contact   |
| Name   | Name of contact |

#### Addcontact and Setcontact

In order to add a contact to a contact group, use the **ADDCONTACT** or **SETCONTACT** action where 'add' will append
and 'set' will overwrite previous definitions:

``` shell
centreon -u admin -p centreon -o CG -a addcontact -v "Guest;User1"
centreon -u admin -p centreon -o CG -a setcontact -v "Guest;User1|User2"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Delcontact

In order to remove a contact from a contact group, use the **DELCONTACT** action:

``` shell
centreon -u admin -p centreon -o CG -a delcontact -v "Guest;User1"
centreon -u admin -p centreon -o CG -a delcontact -v "Guest;User2"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

### Contacts

Object name: **CONTACT**

#### Show

In order to list available contacts, use the **SHOW** action:

``` shell
centreon -u admin -p centreon -o contact -a show
id;name;alias;email;pager;gui access;admin;activate
4;Guest;guest;guest@localhost;;0;0;0
5;Supervisor;admin;root@localhost;;1;1;1
6;User;user;user@localhost;;0;0;0
```

Columns are the following :

| Column      | Description                                   |
| ----------- | --------------------------------------------- |
| ID ID of co | ntact                                         |
| Name        | Name of contact                               |
| Alias       | Alias of contact (also login id)              |
| Email       | Email of contact                              |
| Pager       | Phone number of contact                       |
| GUI Access  | *1* (can access UI) or *0* (cannot access UI) |
| Admin       | *1* (admin) or *0* (non admin)                |
| activate    | *1* (enabled) or *0* (disabled)               |

#### Add

In order to add a contact, use the **ADD** action:

``` shell
centreon -u admin -p centreon -o CONTACT -a ADD -v "user;user;user@mail.com;mypassword;1;1;en_US;local" 
```

The required parameters are the following:

| Parameter           | Description                                   |
| ------------------- | --------------------------------------------- |
| Name                | Name of contact                               |
| Alias (login)       | Alias of contact (also login id)              |
| Email               | Email of contact                              |
| Password            | Password of contact                           |
| Admin               | *1* (admin) or *0* (non admin)                |
| GUI Access          | *1* (can access UI) or *0* (cannot access UI) |
| Language            | Language pack has to be installed on Centreon |
| Authentication type | *local* or *ldap*                             |

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Del

In order to delete one contact, use the **DEL** action. The contact name is used for identifying the contact you would
like to delete:

``` shell
centreon -u admin -p centreon -o contact -a del -v "user" 
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Setparam

If you want to change a specific parameter for a contact, use the **SETPARAM** action:

``` shell
centreon -u admin -p centreon -o contact -a setParam -v "contact alias;hostnotifcmd;command name" 
centreon -u admin -p centreon -o contact -a setParam -v "contact alias;svcnotifcmd;command name" 
centreon -u admin -p centreon -o contact -a setParam -v "contact alias;hostnotifperiod;period name"
centreon -u admin -p centreon -o contact -a setparam -v "contact alias;timezone;Europe/Berlin"
```

The required parameters are the following:

| Parameter     | Description                |
| ------------- | -------------------------- |
| Contact alias | Alias of contact to update |
| Parameter     | Parameter to update        |
| Value         | New value of parameter     |

Parameters that you can change are the following:

| Parameter             | Description                                                                          |
| --------------------- | ------------------------------------------------------------------------------------ |
| name                  | Name                                                                                 |
| alias                 | Alias                                                                                |
| comment               | Comment                                                                              |
| email                 | Email Address                                                                        |
| password              | User Password                                                                        |
| access                | Can reach centreon, *1* if user has access, *0* otherwise                            |
| language              | Locale                                                                               |
| admin                 | *1* if user is admin, *0* otherwise                                                  |
| authtype              | *ldap* or *local*                                                                    |
| hostnotifcmd          | host notification command(s). Multiple commands can be defined with delimiter "|"    |
| svcnotifcmd           | service notification command(s). Multiple commands can be defined with delimiter "|" |
| hostnotifperiod       | host notification period                                                             |
| svcnotifperiod        | service notification period                                                          |
| hostnotifopt          | can be d,u,r,f,s,n                                                                   |
| servicenotifopt       | can be w,u,c,r,f,s,n                                                                 |
| address1              | Address \#1                                                                          |
| address2              | Address \#2                                                                          |
| address3              | Address \#3                                                                          |
| address4              | Address \#4                                                                          |
| address5              | Address \#5                                                                          |
| address6              | Address \#6                                                                          |
| ldap\_dn              | LDAP domain name                                                                     |
| enable\_notifications | *1* when notification is enable, *0* otherwise                                       |
| autologin\_key        | Used for auto login                                                                  |
| template              | Name of the template to apply to the contact                                         |
| timezone              | Timezone                                                                             |

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Enable

In order to enable a contact, use the **ENABLE** action:

``` shell
centreon -u admin -p centreon -o contact -a enable -v "test"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Disable

In order to disable a contact, use the **DISABLE** action:

``` shell
centreon -u admin -p centreon -o contact -a disable -v "test"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

### Contact templates

Object name: CONTACTTPL

Refer to the `CONTACT <contacts>` object

### Dependencies

Object name: **DEP**

#### Show

In order to list available dependencies, use the **SHOW** action:

``` shell
centreon -u admin -p centreon -o DEP -a show
id;name;description;inherits_parent;execution_failure_criteria;notification_failure_criteria
62;my dependency;a description;1;n;n
```

Columns are the following:

| Column                          | Description                                                                |
| ------------------------------- | -------------------------------------------------------------------------- |
| ID                              | Unique ID of the dependency                                                |
| Name                            | Name                                                                       |
| Description                     | Short description of the dependency                                        |
| inherits\_parent                | Whether or not dependency inherits higher level dependencies               |
| execution\_failure\_criteria    | Defines which parent states prevent dependent resources from being checked |
| notification\_failure\_criteria | Defines which parent states prevent notifications on dependent resources   |

#### Add

In order to add a new dependency, use the **ADD** action:

``` shell
centreon -u admin -p centreon -o DEP -a ADD -v "my new dependency;any description;HOST;dummy-host"
```

The required parameters are the following:

| Order | Description                                  |
| ----- | -------------------------------------------- |
| 1     | Name of the dependency                       |
| 2     | Description of the dependency                |
| 3     | Dependency type: HOST, HG, SG, SERVICE, META |
| 4     | Name of the parent resource(s)               |

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Del

In order to delete a dependency, use the **DEL** action. The dependency name is used for identifying the dependency you
would like to delete:

``` shell
centreon -u admin -p centreon -o DEP -a DEL -v "my dependency"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Setparam

In order to set a specific parameter for a dependency, use the **SETPARAM** action:

``` shell
centreon -u admin -p centreon -o DEP -a setparam -v "my dependency;name;my new dependency name"
```

You may change the following parameters:

| Parameter                       | Description   |
| ------------------------------- | ------------- |
| name                            | Name          |
| description                     | Description   |
| comment                         | Comment       |
| inherits\_parent                | *0* or *1*    |
| execution\_failure\_criteria    | o,w,u,c,p,d,n |
| notification\_failure\_criteria | o,w,u,c,p,d,n |

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Listdep

If you want to retrieve the dependency definition of a dependency object, use the **LISTDEP** action:

``` shell
centreon -u admin -p centreon -o DEP -a LISTDEP -v "my dependency"
parents;children
HostParent1|HostParent2;HostChild1|HostChild2,ServiceChild2
```

#### Addparent and Addchild

If you want to add a new parent or a new child in a dependency definition, use the **ADDPARENT** or **ADDCHILD** action:

``` shell
centreon -u admin -p centreon -o DEP -a ADDPARENT -v "my dependency;my_parent_host"
centreon -u admin -p centreon -o DEP -a ADDCHILD -v "my dependency;my_child_host"
centreon -u admin -p centreon -o DEP -a ADDCHILD -v "my dependency;my_child_host2,my_child_service2"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Delparent and Delchild

In order to delete a parent or a child in a dependency definition, use the **DELPARENT** or **DELCHILD** action:

``` shell
centreon -u admin -p centreon -o DEP -a DELPARENT -v "my dependency;my_parent_host"
centreon -u admin -p centreon -o DEP -a DELCHILD -v "my dependency;my_child_host"
centreon -u admin -p centreon -o DEP -a DELCHILD -v "my dependency;my_child_host2,my_child_service2"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

### Downtimes

Object name: **DOWNTIME**

#### Show

In order to list available recurring downtimes, use the **SHOW** action:

``` shell
centreon -u admin -p centreon -o DOWNTIME -a show
id;name;description;activate
1;mail-backup;sunday backup;1
2;my downtime;a description;1
```

Columns are the following:

| Column      | Description                                 |
| ----------- | ------------------------------------------- |
| ID          | Unique ID of the recurring downtime         |
| Name        | Name                                        |
| Description | Short description of the recurring downtime |
| Activate    | Whether or not the downtime is activated    |

In order to show resources of a downtime, use the **Show** action with parameters:

``` shell
centreon -u admin -p centreon -o DOWNTIME -a show -v "mail-backup;host"
```

The parameters are the following:

| Order | Description                                    |
| ----- | ---------------------------------------------- |
| 1     | Name of the downtime                           |
| 2     | (optional) Object type (host, hg, service, sg) |

#### Add

In order to add a new downtime, use the **ADD** action:

``` shell
centreon -u admin -p centreon -o DOWNTIME -a ADD -v "my new downtime;any description"
```

The required parameters are the following:

| Order | Description                 |
| ----- | --------------------------- |
| 1     | Name of the downtime        |
| 2     | Description of the downtime |

#### Del

In order to delete a downtime, use the **DEL** action. The downtime name is used for identifying the recurring downtime
you would like to delete:

``` shell
centreon -u admin -p centreon -o DOWNTIME -a DEL -v "my downtime"
```

#### Setparam

In order to set a specific parameter for a downtime, use the **SETPARAM** action:

``` shell
centreon -u admin -p centreon -o DOWNTIME -a setparam -v "my downtime;name;my new downtime name"
```

You may change the following parameters:

| Parameter   | Description |
| ----------- | ----------- |
| name        | Name        |
| description | Description |

#### Listperiods

If you want to retrieve the periods set on a recurring downtime, use the **LISTPERIODS** action:

``` shell
centreon -u admin -p centreon -o DOWNTIME -a LISTPERIODS -v "my downtime"
position;start time;end time;fixed;duration;day of week;day of month;month cycle
1;1;23:00:00;24:00:00;1;;7;;all
2;1;00:00:00;02:00:00;1;;;1,2;none
3;1;13:45:00;14:40:00;1;;5;;first
```

Columns are the following:

| Column       | Description                                                                                                                                                                      |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Position     | Position of the period; used for deleting a period from a recurring downtime                                                                                                     |
| Start time   | Start time of the recurring downtime                                                                                                                                             |
| End time     | End time of the recurring downtime                                                                                                                                               |
| Fixed        | Type of downtime (1 = fixed, 0 = flexible)                                                                                                                                       |
| Duration     | Duration of downtime when in flexible mode (seconds)                                                                                                                             |
| Day of week  | 1 - 7 (1 = monday ... 7 = sunday)                                                                                                                                                |
| Day of month | 1 - 31                                                                                                                                                                           |
| Month cycle  | "all", "none", "first" or "last". Determines when the downtime will be effective on specific weekdays (i.e: all Sundays, last Sunday of the month, first Sunday of the month...) |

#### Addweeklyperiod

In order to add a weekly period, use the **ADDWEEKLYPERIOD** action:

``` shell
centreon -u admin -p centreon -o DOWNTIME -a ADDWEEKLYPERIOD -v "my downtime;00:00;04:00;0;7200;saturday,sunday"
```

The above example will set a downtime every saturday and sunday between 00:00 and 04:00.

| Parameter   | Description                                                         |
| ----------- | ------------------------------------------------------------------- |
| Name        | Name of the recurring downtime                                      |
| Start time  | Start time of the recurring downtime                                |
| End time    | End time of the recurring downtime                                  |
| Fixed       | 0 for flexible downtime, 1 for fixed                                |
| Duration    | Duration of downtime when in flexible mode (seconds)                |
| Day of week | Can be written with letters or numbers (1 to 7 or monday to sunday) |

#### Addmonthlyperiod

In order to add a monthly period, use the **ADDMONTHLYPERIOD** action:

``` shell
centreon -u admin -p centreon -o DOWNTIME -a ADDMONTHLYPERIOD -v "my downtime;19:00;22:00;1;;14,21"
```

The above example will set a downtime on every 14th and 21st day for all months.

| Parameter       | Description                                          |
| --------------- | ---------------------------------------------------- |
| Name            | Name of the recurring downtime                       |
| Start time Star | t time of the recurring downtime                     |
| End time        | End time of the recurring downtime                   |
| Fixed           | 0 for flexible downtime, 1 for fixed                 |
| Duration        | Duration of downtime when in flexible mode (seconds) |
| Day of month    | 1 to 31                                              |

#### Addspecificperiod

In order to add a specific period, use the **ADDSPECIFICPERIOD** action:

``` shell
centreon -u admin -p centreon -o DOWNTIME -a ADDSPECIFICPERIOD -v "my downtime;19:00;22:00;1;;wednesday;first"
```

The above example will set a downtime on every first wednesday for all months.

| Parameter       | Description                                                         |
| --------------- | ------------------------------------------------------------------- |
| Name            | Name of the recurring downtime                                      |
| Start time Star | t time of the recurring downtime                                    |
| End time        | End time of the recurring downtime                                  |
| Fixed           | 0 for flexible downtime, 1 for fixed                                |
| Duration        | Duration of downtime when in flexible mode (seconds)                |
| Day of week     | Can be written with letters or numbers (1 to 7 or monday to sunday) |
| Month cycle     | first or last                                                       |

#### Addhost, addhostgroup, addservice, addservicegroup

If you want to associate a host, host group, service or service group to a recurring downtime, use the **ADDHOST**,
**ADDHOSTGROUP**, **ADDSERVICE** or **ADDSERVICEGROUP** action:

``` shell
centreon -u admin -p centreon -o DOWNTIME -a ADDHOST -v "my downtime;host_1"
centreon -u admin -p centreon -o DOWNTIME -a ADDSERVICE -v "my downtime;host_1,service_1"
```

Use the "|" delimiter in order to define multiple relationships.

#### Delhost, delhostgroup, delservice, delservicegroup

If you want to remove a host, host group, service or service group from a recurring downtime, use the **DELHOST**,
**DELHOSTGROUP**, **DELSERVICE** or **DELSERVICEGROUP** action:

``` shell
centreon -u admin -p centreon -o DOWNTIME -a DELHOST -v "my downtime;host_1"
centreon -u admin -p centreon -o DOWNTIME -a DELSERVICE -v "my downtime;host_1,service_1"
```

#### Sethost, sethostgroup, setservice, setservicegroup

The **SETHOST**, **SETHOSTGROUP**, **SETSERVICE** AND **SETSERVICEGROUP** actions are similar to their **ADD**
counterparts, but they will overwrite the relationship definitions instead of appending them:

``` shell
centreon -u admin -p centreon -o DOWNTIME -a ADDHOST -v "my downtime;host_1|host_2"
centreon -u admin -p centreon -o DOWNTIME -a ADDSERVICE -v "my downtime;host_1,service_1|host_2,service_2"
```

Use the "|" delimiter in order to define multiple relationships.

### Host categories

Object name: **HC**

#### Show

In order to list available host categories, use the **SHOW** action:

``` shell
centreon -u admin -p centreon -o HC -a show
id;name;alias;members
1;Linux;Linux Servers;host1
2;Windows;Windows Server;host2
3;AS400;AS400 systems;host3,host4
```

Columns are the following:

| Column | Description            |
| ------ | ---------------------- |
| Name   | Name of host category  |
| Alias  | Alias of host category |

#### Add

In order to add a host category, use the **ADD**:

``` shell
centreon -u admin -p centreon -o HC -a add -v "Databases;Databases servers"
```

Required parameters are the following:

| Order | Description            |
| ----- | ---------------------- |
| 1     | Name of host category  |
| 2     | Alias of host category |

#### Del

In order to delete a host category, use the **DEL** action. The name is used for identifying the host category you want
to delete:

``` shell
centreon -u admin -p centreon -o HC -a DEL -v "Databases"
```

#### Getmember

In order to view the list hosts in a host category, use the **GETMEMBER** action:

``` shell
centreon -u admin -p centreon -o HC -a getmember -v "Linux"
id;name
14;Centreon-Server
15;srv-test
```

#### Addmember and Setmember

In order to add a host or a host template into a host category, use the **ADDMEMBER** or **SETMEMBER** action where
*add* will append and *set* will overwrite previous definitions:

``` shell
centreon -u admin -p centreon -o HC -a addmember -v "Linux;host7"
centreon -u admin -p centreon -o HC -a setmember -v "Windows;host7|host8|host9"
```

The needed parameters are the following:

| Order | Description                                                 |
| ----- | ----------------------------------------------------------- |
| 1     | Host category name                                          |
| 2     | Host names to add/set. For multiple definitions, use the \* |

#### Setseverity

In order to turn a host category into a severity, use the **SETSEVERITY** action:

``` shell
centreon -u admin -p centreon -o HC -a setseverity -v "Critical;3;16x16/critical.gif"
```

The needed parameters are the following:

| Order | Description                       |
| ----- | --------------------------------- |
| 1     | Host category name                |
| 2     | Severity level - must be a number |
| 3     | Icon that represents the severity |

#### Unsetseverity

In order to turn a severity into a regular host category, use the **UNSETSEVERITY** action:

``` shell
centreon -u admin -p centreon -o HC -a unsetseverity -v "Critical"
```

The needed parameters are the following:

| Order | Description        |
| ----- | ------------------ |
| 1     | Host category name |

#### Delmember

In order to remove a host or a host template from a host category, use the **DELMEMBER** action:

``` shell
centreon -u admin -p centreon -o HC -a delmember -v "Linux;host7"
centreon -u admin -p centreon -o HC -a delmember -v "Windows;host8"
```

The needed parameters are the following:

| Order | Description                             |
| ----- | --------------------------------------- |
| 1     | Host category name                      |
| 2     | Host names to remove from host category |

###### Host group services

Object name: **HGSERVICE**

Refer to the `SERVICE <services>` object

> ***NOTE:*** HGSERVICE works just like SERVICE, you only need to replace the host name with the host group name.

### Host groups

Object name: **HG**

#### Show

In order to list available host groups, use the **SHOW** action:

``` shell
centreon -u admin -p centreon -o HG -a show
id;name;alias
53;Linux-Servers;All linux servers
54;Windows-Servers;All windows servers
55;Networks;All other equipments
56;Printers;All printers
58;Routers;All routers
59;Switches;All switches
60;Firewall;All firewalls
61;Unix-Servers;All Unix servers
```

Columns are the following:

| Column | Description |
| ------ | ----------- |
| ID ID  |             |
| Name   | Name        |
| Alias  | Alias       |

#### Add

In order to add a hostgroup, use the **ADD** action:

``` shell
centreon -u admin -p centreon -o HG -a add -v "SAP;SAP servers"
```

The required parameters are the following:

| Order | Description         |
| ----- | ------------------- |
| 1     | Name of host group  |
| 2     | Alias of host group |

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Del

In order to delete one hostgroup, use the **DEL** action. The host group name is used for identifying the host group you
would like to delete:

``` shell
centreon -u admin -p centreon -o HG -a DEL -v "SAP"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Setparam

In order to set a specific parameter for a host group, use the **SETPARAM** action:

``` shell
centreon -u admin -p centreon -o HG -a setparam -v "SAP;name;hg1"
centreon -u admin -p centreon -o HG -a setparam -v "SAP;alias;hg2"
```

You may change the following parameters:

| Parameter        | Description                     |
| ---------------- | ------------------------------- |
| name             | Name                            |
| alias            | Alias                           |
| comment          | Comment                         |
| activate         | *1* when enabled, *0* otherwise |
| notes            | Notes                           |
| notes\_url       | Notes URL                       |
| action\_url      | Action URL                      |
| icon\_image      | Icon image                      |
| map\_icon\_image | Map icon image                  |

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Getmember

If you want to retrieve the members of a host group, use the **GETMEMBER** action:

``` shell
centreon -u admin -p centreon -o HG -a getmember -v "Linux-Servers"
id;name
34;Centreon-Server
35;srv-web
```

#### Addmember and Setmember

If you want to add members to a specific host group, use the **SETMEMBER** or **ADDMEMBER** action:

``` shell
centreon -u admin -p centreon -o HG -a setmember -v "Linux-Servers;srv-test|srv-test2"
centreon -u admin -p centreon -o HG -a addmember -v "Linux-Servers;srv-new"
```

| Action | Description                                                                           |
| ------ | ------------------------------------------------------------------------------------- |
| set\*  | Overwrites previous definitions. Use the delimiter | to set multiple members          |
| add\*  | Appends new members to the existing ones. Use the delimiter | to add multiple members |

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Delmember

If you want to remove members from a specific host group, use the **DELMEMBER** action:

``` shell
centreon -u admin -p centreon -o HG -a delmember -v "Linux-Servers;srv-test"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

### Hosts

Object name: HOST

#### Show

In order to list available hosts, use the **SHOW** action:

``` shell
centreon -u admin -p centreon -o HOST -a show
id;name;alias;address;activate
82;sri-dev1;dev1;192.168.2.1;1
83;sri-dev2;dev2;192.168.2.2;1
84;sri-dev3;dev3;192.168.2.3;0
85;sri-dev4;dev4;192.168.2.4;1
86;sri-dev5;dev5;192.168.2.5;1
87;sri-dev6;dev6;192.168.2.6;1
94;sri-dev7;dev7;192.168.2.7;1
95;sri-dev8;dev8;192.168.2.8;1
```

Columns are the following :

| Column     | Description                     |
| ---------- | ------------------------------- |
| ID         | ID of host                      |
| Name       | Host name                       |
| Alias      | Host alias                      |
| IP/Address | IP of host                      |
| Activate   | 1 when enabled, 0 when disabled |

#### Add

In order to add a host, use the **ADD** action:

``` shell
centreon -u admin -p centreon -o HOST -a ADD -v "test;Test host;127.0.0.1;generic-host;central;Linux"
```

Required parameters:

| Order | Description                                                  |
| ----- | ------------------------------------------------------------ |
| 1     | Host name                                                    |
| 2     | Host alias                                                   |
| 3     | Host IP address                                              |
| 4     | Host templates; for multiple definitions, use delimiter \*\* |
| 5     | Instance name (poller)                                       |
| 6     | Hostgroup; for multiple definitions, use delimiter \*\*      |

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Del

In order to delete one host, use the **DEL** action. You have to list the available hosts in order to identify the one
you want to delete:

``` shell
centreon -u admin -p centreon -o HOST -a DEL -v "test"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Setparam

In order to change parameters on a host configuration, use the **SETPARAM** action:

``` shell
centreon -u admin -p centreon -o HOST -a setparam -v "test;alias;Development test"
centreon -u admin -p centreon -o HOST -a setparam -v "test;address;192.168.1.68"
centreon -u admin -p centreon -o HOST -a setparam -v "test;check_period;24x7"
centreon -u admin -p centreon -o HOST -a setparam -v "test;timezone;Europe/Berlin"
```

You may edit the following parameters:

| Parameter                      | Description                                                            |
| ------------------------------ | ---------------------------------------------------------------------- |
| geo\_coords                    | Geo coordinates                                                        |
| 2d\_coords                     | 2D coordinates (used by statusmap)                                     |
| 3d\_coords                     | 3D coordinates (used by statusmap)                                     |
| action\_url                    | Action URL                                                             |
| activate                       | Whether or not host is enabled                                         |
| active\_checks\_enabled        | Whether or not active checks are enabled                               |
| acknowledgement\_timeout       | Acknowledgement timeout (in seconds)                                   |
| address                        | Host IP Address                                                        |
| alias                          | Alias                                                                  |
| check\_command                 | Check command                                                          |
| check\_command\_arguments      | Check command arguments                                                |
| check\_interval                | Normal check interval                                                  |
| check\_freshness               | Enables check freshness                                                |
| check\_period                  | Check period                                                           |
| contact\_additive\_inheritance | Enables contact additive inheritance                                   |
| cg\_additive\_inheritance      | Enables contactgroup additive inheritance                              |
| event\_handler                 | Event handler command                                                  |
| event\_handler\_arguments      | Event handler command arguments                                        |
| event\_handler\_enabled        | Whether or not event handler is enabled                                |
| first\_notification\_delay     | First notification delay (in seconds)                                  |
| flap\_detection\_enabled       | Whether or not flap detection is enabled                               |
| flap\_detection\_options       | Flap detection options 'o' for Up, 'd' for Down, 'u' for Unreachable   |
| host\_high\_flap\_threshold    | High flap threshold                                                    |
| host\_low\_flap\_threshold     | Low flap threshold                                                     |
| icon\_image                    | Icon image                                                             |
| icon\_image\_alt               | Icon image text                                                        |
| max\_check\_attempts           | Maximum number of attempt before a HARD state is declared              |
| name                           | Host name                                                              |
| notes                          | Notes                                                                  |
| notes\_url                     | Notes URL                                                              |
| notifications\_enabled         | Whether or not notification is enabled                                 |
| notification\_interval         | Notification interval                                                  |
| notification\_options          | Notification options                                                   |
| notification\_period           | Notification period                                                    |
| recovery\_notification\_delay  | Recovery notification delay                                            |
| obsess\_over\_host             | Whether or not obsess over host option is enabled                      |
| passive\_checks\_enabled       | Whether or not passive checks are enabled                              |
| retain\_nonstatus\_information | Whether or not there is non-status retention                           |
| retain\_status\_information    | Whether or not there is status retention                               |
| retry\_check\_interval         | Retry check interval                                                   |
| snmp\_community                | Snmp Community                                                         |
| snmp\_version                  | Snmp version                                                           |
| stalking\_options              | Comma separated options: 'o' for OK, 'd' for Down, 'u' for Unreachable |
| statusmap\_image               | Status map image (used by statusmap                                    |
| host\_notification\_options    | Notification options (d,u,r,f,s)                                       |
| timezone                       | Timezone                                                               |

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Getparam

In order to get specific parameters on a host configuration, use the **GETPARAM** action:

``` shell
centreon -u admin -p centreon -o HOST -a getparam -v "test;alias"
alias
test
```

``` shell
centreon -u admin -p centreon -o HOST -a getparam -v "test;alias|alia|timezone"
Object not found:alia
```

``` shell
centreon -u admin -p centreon -o HOST -a getparam -v "test;alias|address|timezone"
alias;address;timezone
test;192.168.56.101;Europe/Berlin
```

You may edit the following parameters:

| Parameter                      | Description                                                            |
| ------------------------------ | ---------------------------------------------------------------------- |
| 2d\_coords                     | 2D coordinates (used by statusmap)                                     |
| 3d\_coords                     | 3D coordinates (used by statusmap)                                     |
| action\_url                    | Action URL                                                             |
| activate                       | Whether or not host is enabled                                         |
| active\_checks\_enabled        | Whether or not active checks are enabled                               |
| acknowledgement\_timeout       | Acknowledgement timeout (in seconds)                                   |
| address                        | Host IP Address                                                        |
| alias                          | Alias                                                                  |
| check\_command                 | Check command                                                          |
| check\_command\_arguments      | Check command arguments                                                |
| check\_interval                | Normal check interval                                                  |
| check\_freshness               | Enables check freshness                                                |
| check\_period                  | Check period                                                           |
| contact\_additive\_inheritance | Enables contact additive inheritance                                   |
| cg\_additive\_inheritance      | Enables contactgroup additive inheritance                              |
| event\_handler                 | Event handler command                                                  |
| event\_handler\_arguments      | Event handler command arguments                                        |
| event\_handler\_enabled        | Whether or not event handler is enabled                                |
| first\_notification\_delay     | First notification delay (in seconds)                                  |
| flap\_detection\_enabled       | Whether or not flap detection is enabled                               |
| flap\_detection\_options       | Flap detection options 'o' for Up, 'd' for Down, 'u' for Unreachable   |
| host\_high\_flap\_threshold    | High flap threshold                                                    |
| host\_low\_flap\_threshold     | Low flap threshold                                                     |
| icon\_image                    | Icon image                                                             |
| icon\_image\_alt               | Icon image text                                                        |
| max\_check\_attempts           | Maximum number of attempt before a HARD state is declared              |
| name                           | Host name                                                              |
| notes                          | Notes                                                                  |
| notes\_url                     | Notes URL                                                              |
| notifications\_enabled         | Whether or not notification is enabled                                 |
| notification\_interval         | Notification interval                                                  |
| notification\_options          | Notification options                                                   |
| notification\_period           | Notification period                                                    |
| recovery\_notification\_delay  | Recovery notification delay                                            |
| obsess\_over\_host             | Whether or not obsess over host option is enabled                      |
| passive\_checks\_enabled       | Whether or not passive checks are enabled                              |
| process\_perf\_data            | Process performance data command                                       |
| retain\_nonstatus\_information | Whether or not there is non-status retention                           |
| retain\_status\_information    | Whether or not there is status retention                               |
| retry\_check\_interval         | Retry check interval                                                   |
| snmp\_community                | Snmp Community                                                         |
| snmp\_version                  | Snmp version                                                           |
| stalking\_options              | Comma separated options: 'o' for OK, 'd' for Down, 'u' for Unreachable |
| statusmap\_image               | Status map image (used by statusmap                                    |
| host\_notification\_options    | Notification options (d,u,r,f,s)                                       |
| timezone                       | Timezone                                                               |

#### Setinstance

In order to set the instance from which a host will be monitored, use the **SETINSTANCE** action:

``` shell
centreon -u admin -p centreon -o HOST -a setinstance -v "Centreon-Server;Poller 1"
```

#### Showinstance

To determine the instance from which a host will be monitored, use the **SHOWINSTANCE** action:

``` shell
centreon -u admin -p centreon -o HOST -a showinstance -v "Centreon-Server"
id;name
2;Poller 1
```

#### Getmacro

In order to view the custom macro list of a host, use the **GETMACRO** action:

``` shell
centreon -u admin -p centreon -o HOST -a getmacro -v "Centreon-Server"
macro name;macro value;is_password;description
$_HOSTMACADDRESS$;00:08:C7:1B:8C:02;0;description of macro
```

#### Setmacro

In order to set a custom host macro, use the **SETMACRO** action:

``` shell
centreon -u admin -p centreon -o HOST -a setmacro -v "Centreon-Server;warning;80;0;description of macro"
centreon -u admin -p centreon -o HOST -a setmacro -v "Centreon-Server;critical;90;0;description of macro"
```

> ***NOTE:*** If the macro already exists, this action will only update the macro value. Otherwise, macro will be created.

#### Delmacro

In order to delete a macro host, use the **DELMACRO** action:

``` shell
centreon -u admin -p centreon -o HOST -a delmacro -v "Centreon-Server;warning"
centreon -u admin -p centreon -o HOST -a delmacro -v "Centreon-Server;critical"
```

#### Gettemplate

In order to view the template list of a host, use the **GETTEMPLATE** action:

``` shell
centreon -u admin -p centreon -o HOST -a gettemplate -v "Centreon-Server"
id;name
2;generic-host
12;Linux-Servers
```

#### Addtemplate and Settemplate

In order to add a host template to an existing host, use the **ADDTEMPLATE** or the **SETTEMPLATE** action, where *add*
will append and *set* will overwrite previous definitions:

``` shell
centreon -u admin -p centreon -o HOST -a addtemplate -v "Centreon-Server;srv-Linux"
centreon -u admin -p centreon -o HOST -a settemplate -v "Centreon-Server;hardware-Dell"
```

> ***NOTE:*** All service templates linked to the new host template will be automatically deployed on the existing host. (no longer
the case with version later than 1.3.0, use the 'applytpl' action manually)

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Deltemplate

In order to remove a host template to an existing host, use the **DELTEMPLATE** action:

``` shell
centreon -u admin -p centreon -o HOST -a deltemplate -v "test;srv-Linux|hardware-Dell"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Applytpl

When a template host undergoes modified link-level service template, the change is not automatically reflected in hosts
belonging to that template. For the change to take effect, it must then re-apply the template on this host. For this,
use the **APPLYTPL** action:

``` shell
centreon -u admin -p centreon -o HOST -a applytpl -v "test"
All new services are now created.
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Getparent

In order to view the parents of a host, use the **GETPARENT** action:

``` shell
centreon -u admin -p centreon -o HOST -a getparent -v "Centreon-Server"
id;name
43;server-parent1
44;server-parent2
```

#### Addparent and Setparent

In order to add a host parent to an host, use the **ADDPARENT** or **SETPARENT** actions where *add* will append and
*set* will overwrite the previous definitions:

``` shell
centreon -u admin -p centreon -o HOST -a addparent -v "host;hostParent1"
centreon -u admin -p centreon -o HOST -a setparent -v "host;hostParent1|hostParent2"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Delparent

In order to remove a parent, use the **DELPARENT** action:

``` shell
centreon -u admin -p centreon -o HOST -a delparent -v "Centreon-Server;server-parent1|server-parent2"
```

#### Getcontactgroup

In order to view the notification contact groups of a host, use the **GETCONTACTGROUP** action:

``` shell
centreon -u admin -p centreon -o HOST -a getcontactgroup -v "Centreon-Server"
id;name
17;Administrators
```

#### Addcontactgroup and Setcontactgroup

If you want to add notification contactgroups to a host, use the **ADDCONTACTGROUP** or **SETCONTACTGROUP** actions
where *add* will append and *set* will overwrite previous definitions:

``` shell
centreon -u admin -p centreon -o HOST -a addcontactgroup -v "Centreon-Server;Contactgroup1"
centreon -u admin -p centreon -o HOST -a setcontactgroup -v "Centreon-Server;Contactgroup1|Contactgroup2"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Delcontactgroup

If you want to remove notification contactgroups from a host, use the **DELCONTACTGROUP** action:

``` shell
centreon -u admin -p centreon -o HOST -a delcontactgroup -v "Centreon-Server;Contactgroup2"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Getcontact

In order to view the notification contacts of a host, use the **GETCONTACT** action:

``` shell
centreon -u admin -p centreon -o HOST -a getcontact -v "Centreon-Server"
id;name
11;guest
```

#### Addcontact and Setcontact

If you want to add notification contacts to a host, use the **ADDCONTACT** or **SETCONTACT** actions where *add* will
append and *set* will overwrite previous definitions:

``` shell
centreon -u admin -p centreon -o HOST -a addcontact -v "Centreon-Server;Contact1"
centreon -u admin -p centreon -o HOST -a setcontact -v "Centreon-Server;Contact1|Contact2"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Delcontact

If you want to remove a notification contacts from a host, use the **DELCONTACT** action:

``` shell
centreon -u admin -p centreon -o HOST -a delcontact -v "Centreon-Server;Contact2"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Gethostgroup

In order to view the hostgroups that are tied to a host, use the **GETHOSTGROUP** action:

``` shell
centreon -u admin -p centreon -o HOST -a gethostgroup -v "Centreon-Server"
id;name
9;Linux-Servers
```

#### Addhostgroup and Sethostgroup

If you want to tie hostgroups to a host, use the **ADDHOSTGROUP** or **SETHOSTGROUP** actions where *add* will append
and *set* will overwrite previous definitions:

``` shell
centreon -u admin -p centreon -o HOST -a addhostgroup -v "Centreon-Server;Hostgroup1"
centreon -u admin -p centreon -o HOST -a sethostgroup -v "Centreon-Server;Hostgroup1|Hostgroup2"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Delhostgroup

If you want to remove hostgroups from a host, use the **DELHOSTGROUP** action:

``` shell
centreon -u admin -p centreon -o HOST -a delhostgroup -v "Centreon-Server;Hostgroup2"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Setseverity

In order to associate a severity to a host, use the **SETSEVERITY** action:

``` shell
centreon -u admin -p centreon -o HOST -a setseverity -v "Centreon-Server;Critical"
```

Required parameters:

| Order | Description   |
| ----- | ------------- |
| 1     | Host name     |
| 2     | Severity name |

#### Unsetseverity

In order to remove the severity from a host, use the **UNSETSEVERITY** action:

``` shell
centreon -u admin -p centreon -o HOST -a unsetseverity -v "Centreon-Server"
```

Required parameters:

| Order | Description |
| ----- | ----------- |
| 1     | Host name   |

#### Enable

In order to enable an host, use the **ENABLE** action:

``` shell
centreon -u admin -p centreon -o HOST -a enable -v "test"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Disable

In order to disable a host, use the **DISABLE** action:

``` shell
centreon -u admin -p centreon -o HOST -a disable -v "test"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

### Host templates

Object name: **HTPL**

Refer to the `HOST <hosts>` object

> ***NOTE:*** You cannot use the **APPLYTPL** and **SETINSTANCE** actions on **HTPL** objects.

If you are looking for service templates association to host templates refer to ADDHOSTTEMPLATE/SETHOSTTEMPLATE command
from `STPL <addhosttemplate-and-sethosttemplate>` object.

### Instances (Pollers)

Object name: **INSTANCE**

#### Show

In order to list available instances, use the **SHOW** action:

``` shell
centreon -u admin -p centreon -o INSTANCE -a show 
id;name;localhost;ip address;activate;status;init script;monitoring engine;bin;stats bin;perfdata;ssh port
1;Central;1;127.0.0.1;1;0;/etc/init.d/nagios;NAGIOS;/usr/local/nagios/bin/nagios;/usr/local/nagios/bin/nagiostats;/usr/local/nagios/var/service-perfdata;22
[...]
```

Columns are the following:

| Column      | Description                                 |
| ----------- | ------------------------------------------- |
| ID          | ID                                          |
| Name        | Name                                        |
| Localhost   | *1* if it is the main poller, *0* otherwise |
| IP Address  | IP address of the poller                    |
| Activate    | *1* if poller is enabled, *0* otherwise     |
| Status      | *1* if poller is running, *0* otherwise     |
| Init script | Init script path                            |
| Bin         | Path of the Scheduler binary                |
| Stats Bin   | Path of the Nagios Stats binary             |
| SSH Port    | SSH Port                                    |

#### Add

In order to add an instance you use the **ADD** action:

``` shell
centreon -u admin -p centreon -o INSTANCE -a add -v "Poller test;10.30.2.55;22;NAGIOS"
```

Required fields are:

| Column   | Description              |
| -------- | ------------------------ |
| Name     |                          |
| Address  | IP address of the poller |
| SSH Port | SSH port                 |

#### Del

If you want to remove an instance, use the **DEL** action. The Name is used for identifying the instance to delete:

``` shell
centreon -u admin -p centreon -o INSTANCE -a del -v "Poller test"
```

#### Setparam

If you want to change a specific parameter of an instance, use the **SETPARAM** command. The Name is used for
identifying the instance to update:

``` shell
centreon -u admin -p centreon -o INSTANCE -a setparam -v "Poller test;ns_ip_address;10.30.2.99"
```

Arguments are composed of the following columns:

| Order | Column description |
| ----- | ------------------ |
| 1     | Name of instance   |
| 2     | Parameter name     |
| 3     | Parameter value    |

Parameters that you may change are:

| Column                       | Description                                 |
| ---------------------------- | ------------------------------------------- |
| name                         | Name of the poller                          |
| localhost                    | *1* if it is the main poller, *0* otherwise |
| ns\_ip\_address              | IP address of the poller                    |
| ns\_activate                 | *1* if poller is enabled, *0* otherwise     |
| engine\_start\_command       | Command to start Centreon Engine process    |
| engine\_stop\_command        | Command to stop Centreon Engine process     |
| engine\_restart\_command     | Command to restart Centreon Engine process  |
| engine\_reload\_command      | Command to reload Centreon Engine process   |
| nagios\_bin                  | Path of the Scheduler binary                |
| nagiostats\_bin              | Path of the Nagios Stats binary             |
| ssh\_port                    | SSH Port                                    |
| broker\_reload\_command      | Command to reload Centreon Broker process   |
| centreonbroker\_cfg\_path    | Centreon Broker Configuration path          |
| centreonbroker\_module\_path | Centreon Broker Module path                 |

#### Gethosts

If you want to list all hosts that are monitored by a poller, use the **GETHOSTS** action. The Name is used for
identifying the instance to query:

``` shell
centreon -u admin -p centreon -o INSTANCE -a GETHOSTS -v "Poller test"
14;Centreon-Server;127.0.0.1
17;srv-website;10.30.2.1
```

Returned info is the following:

| Order | Description  |
| ----- | ------------ |
| 1     | Host ID      |
| 2     | Host name    |
| 3     | Host address |

### LDAP configuration

Object name: **LDAP**

#### Show

In order to list available LDAP configurations, use the **SHOW** action:

``` shell
centreon -u admin -p centreon -o LDAP -a show
id;name;description;status
3;ad;my ad conf;1
2;openldap;my openldap conf;1
[...]
```

Columns are the following:

| Order | Description                     |
| ----- | ------------------------------- |
| 1     | ID                              |
| 2     | Configuration name              |
| 3     | Configuration description       |
| 4     | 1 when enabled, 0 when disabled |

#### Add

In order to add an LDAP configuration, use the **ADD** action:

``` shell
centreon -u admin -p centreon -o LDAP -a add -v "my new configuration;my description"
```

Required fields are:

| Order | Description               |
| ----- | ------------------------- |
| 1     | Configuration name        |
| 2     | Configuration description |

#### Del

If you want to remove an LDAP configuration, use the **DEL** action. The Configuration Name is used for identifying the
LDAP configuration to delete:

``` shell
centreon -u admin -p centreon -o LDAP -a del -v "my new configuration"
```

#### Setparam

If you want to change a specific parameter of an LDAP configuration, use the **SETPARAM** action. The Configuration Name
is used for identifying the LDAP configuration to update:

``` shell
centreon -u admin -p centreon -o LDAP -a SETPARAM -v "my new configuration;description;my new desc"
```

Parameters use the following order:

| Order | Description             |
| ----- | ----------------------- |
| 1     | Configuration to update |
| 2     | Parameter key           |
| 3     | Parameter value         |

Parameters that you may change are the following:

| Key                    | Description                                                    |
| ---------------------- | -------------------------------------------------------------- |
| name                   | Configuration name                                             |
| description            | Configuration description                                      |
| enable                 | 1 when enabled, 0 when disabled                                |
| alias                  | Alias                                                          |
| bind\_dn               | Bind DN                                                        |
| bind\_pass             | Bind password                                                  |
| group\_base\_search    | Group base search                                              |
| group\_filter          | Group filter                                                   |
| group\_member          | Group member                                                   |
| group\_name            | Group name                                                     |
| ldap\_auto\_import     | Enable or disable auto import (0 or 1)                         |
| ldap\_contact\_tmpl    | Contact template to use on import                              |
| ldap\_dns\_use\_domain | Use domain or not (0 or 1)                                     |
| ldap\_search\_limit    | Search size limit                                              |
| ldap\_search\_timeout  | Timeout delay (in seconds)                                     |
| ldap\_srv\_dns         | DNS server (only used when ldap\_dns\_use\_domain is set to 1) |
| ldap\_store\_password  | Store password in database or not (0 or 1)                     |
| ldap\_template         | Possible values: Posix, Active Directory                       |
| protocol\_version      | Protocol version (2 or 3)                                      |
| user\_base\_search     | User base search                                               |
| user\_email            | User email                                                     |
| user\_filter           | User filter                                                    |
| user\_firstname        | User firstname                                                 |
| user\_lastname         | User lastname                                                  |
| user\_name             | User name                                                      |
| user\_pager            | User phone number                                              |
| user\_group            | User group                                                     |

#### Showserver

In order to show the server list of an LDAP configuration, use the **SHOWSERVER** action. The Configuration Name is used
for identifying the LDAP configuration to query:

``` shell
centreon -u admin -p centreon -o LDAP -a SHOWSERVER -v "openldap"
id;address;port;ssl;tls;order
2;10.30.2.3;389;0;0;1
```

#### Addserver

In order to add a server to an LDAP configuration, use the **ADDSERVER** action:

``` shell
centreon -u admin -p centreon -o LDAP -a ADDSERVER -v "openldap;10.30.2.15;389;0;1"
```

Required parameters are the following:

| Order | Description        |
| ----- | ------------------ |
| 1     | Configuration name |
| 2     | Server address     |
| 3     | Server port        |
| 4     | Use SSL or not     |
| 5     | Use TLS or not     |

#### Delserver

In order to remove a server from an LDAP configuration, use the **DELSERVER** action. The server ID is used for
identifying the server to delete:

``` shell
centreon -u admin -p centreon -o LDAP -a DELSERVER -v 2
```

#### Setparamserver

In order to update the server parameters of an LDAP configuration, use the **SETPARAMSERVER** action. The server ID is
used for identifying the server to update:

``` shell
centreon -u admin -p centreon -o LDAP -a SETPARAMSERVER -v "2;use_ssl;1"
```

Parameters that you may update are the following:

| Key           | Description                        | Possible values |
| ------------- | ---------------------------------- | --------------- |
| host\_address | Address of the server              |                 |
| host\_port    | Port of the server                 |                 |
| host\_order   | Priority order in case of failover |                 |
| use\_ssl      | Use SSL or not                     | 0 or 1          |
| use\_tls      | Use TLS or not                     | 0 or 1          |

### Realtime acknowledgement

Object name: **RTACKNOWLEDGEMENT**

#### Show host realtime acknowledgement

In order to list available realtime acknowledgement, use the **SHOW** action: You can use the value "HOST" to display
all the acknowledgement:

``` shell
centreon -u admin -p centreon -o RTACKNOWLEDGEMENT -a show -v "HOST;generic-host"
id;host_name;entry_time;author;comment_data;sticky;notify_contacts;persistent_comment
6;generic-host;2017/09/28 14:21;admin;'generic-comment';2;0;1
```

Columns are the following :

| Column              | Description                                                                        |
| ------------------- | ---------------------------------------------------------------------------------- |
| Id                  | Id of the acknowledgement                                                          |
| Host\_name          | Name of the host                                                                   |
| Entry\_time         | Beginning of acknowledgement                                                       |
| Author              | Name of the author                                                                 |
| Comment\_data       | Short description of the acknowledgement                                           |
| Sticky              | Acknowledgement will be maintained in case of a change of Not-OK status (0/2)      |
| Notify\_contacts    | Notification send to the contacts linked to the object (0/1)                       |
| Persistent\_comment | Acknowledgement will be maintained in the case of a restart of the scheduler (0/1) |

#### Show service realtime acknowledgement

In order to list available realtime acknowledgement, use the **SHOW** action: You can use the value "SVC" to display
all the acknowledgement:

``` shell
centreon -u admin -p centreon -o RTACKNOWLEDGEMENT -a show -v "SVC;generic-host,generic-service"
id;host_name;service_name;entry_time;author;comment_data;sticky;notify_contacts;persistent_comment
42;generic-host;generic-service;2017/09/28 14:21;admin;'generic-comment';2;0;1
```

Columns are the following :

| Column              | Description                                                                        |
| ------------------- | ---------------------------------------------------------------------------------- |
| Id                  | Id of the acknowledgement                                                          |
| Host\_name          | Name of the host                                                                   |
| Service\_name       | Name of the service                                                                |
| Entry\_time         | Beginning of acknowledgement                                                       |
| Author              | Name of the author                                                                 |
| Comment\_data       | Short description of the acknowledgement                                           |
| Sticky              | Acknowledgement will be maintained in case of a change of Not-OK status (0/2)      |
| Notify\_contacts    | Notification send to the contacts linked to the object (0/1)                       |
| Persistent\_comment | Acknowledgement will be maintained in the case of a restart of the scheduler (0/1) |

#### Add host realtime acknowledgement

If you want to associate a host to a realtime acknowledgement, use the **ADD** action:

``` shell
centreon -u admin -p centreon -o RTACKNOWLEDGEMENT -a add -v "HOST;central;my comments;2;0;1"
```

The required parameters are the following :

| Order | Description                                                                                     |
| ----- | ----------------------------------------------------------------------------------------------- |
| 1     | Value you want to associate                                                                     |
| 2     | Name of the host (Name of the service)                                                          |
| 3     | Short description of the realtime acknowledgement                                               |
| 4     | Acknowledgement maintained in case of a change of status (Sticky use 0 or 2)                    |
| 5     | Notification send to the contacts linked to the object (Notify use 0 or 1)                      |
| 6     | Maintained th acknowledgement in the case of a restart of the scheduler (Persistent use 0 or 1) |

#### Add service realtime acknowledgement

If you want to associate a service or service group to a realtime acknowledgement, use the **ADD** action:

``` shell
centreon -u admin -p centreon -o RTACKNOWLEDGEMENT -a add -v "SVC;central,ping|central,memory;my comments;2;0;1"
```

The required parameters are the following :

| Order | Description                                                                                     |
| ----- | ----------------------------------------------------------------------------------------------- |
| 1     | Value you want to associate                                                                     |
| 2     | Name of the host , name of the service                                                          |
| 3     | Short description of the realtime acknowledgement                                               |
| 4     | Acknowledgement maintained in case of a change of status (Sticky use 0 or 2)                    |
| 5     | Notification send to the contacts linked to the object (Notify use 0 or 1)                      |
| 6     | Maintained th acknowledgement in the case of a restart of the scheduler (Persistent use 0 or 1) |

#### Cancel a realtime acknowledgement

In order to cancel a realtime acknowledgement, use the **CANCEL** action:

``` shell
centreon -u admin -p centreon -o RTACKNOWLEDGEMENT -a cancel -v "central,ping"
```

The required parameters are the following :

| Order | Description                      |
| ----- | -------------------------------- |
| 1     | Name of acknowledged resource(s) |

### Realtime downtimes

Object name: **RTDOWNTIME**

#### Show host realtime downtime

In order to list available realtime downtimes, use the **SHOW** action: You can use the value "HOST" to display all the
downtimes:

``` shell
centreon -u admin -p centreon -o RTDOWNTIME -a show -v "HOST;generic-host"
id;host_name;author;actual_start_time;actual_end_time;start_time;end_time;comment_data;duration;fixed
6;generic-host;admin;2017/09/28 14:21;N/A;2017/09/26 17:00;2017/09/30 19:00;'generic-comment';3600;1
```

Columns are the following :

| Column              | Description                                                |
| ------------------- | ---------------------------------------------------------- |
| id                  | Name of the downtime                                       |
| Host\_name          | Name of the host                                           |
| Author              | Name of the author                                         |
| Actual\_start\_time | Actual start date in case of flexible downtime             |
| Actual\_end\_time   | Actual end date in case of flexible downtime               |
| Start\_time         | Beginning of downtime                                      |
| End\_time           | End of downtime                                            |
| Comment\_data       | Short description of the realtime downtime                 |
| Duration            | Duration of Downtime                                       |
| Fixed               | Downtime starts and stops at the exact start and end times |

#### Show service realtime downtime

In order to list available realtime downtimes, use the **SHOW** action: You can use the value "SVC" to display all the
downtimes:

``` shell
centreon -u admin -p centreon -o RTDOWNTIME -a show -v "SVC;generic-host,generic-service"
id;host_name;service_name;author;start_time;end_time;comment_data;duration;fixed
42;generic-host;generic-service;admin;2017/09/28 14:21;N/A;2017/09/26 17:00;2017/09/30 19:00;'generic-comment';3600;1
```

Columns are the following :

| Column              | Description                                                |
| ------------------- | ---------------------------------------------------------- |
| id                  | Name of the downtime                                       |
| Host\_name          | Name of the host                                           |
| Service\_name       | Name of the service                                        |
| Author              | Name of the author                                         |
| Actual\_start\_time | Actual start date in case of flexible downtime             |
| Actual\_end\_time   | Actual end date in case of flexible downtime               |
| Start\_time         | Beginning of downtime                                      |
| End\_time           | End of downtime                                            |
| Comment\_data       | Short description of the realtime downtime                 |
| Duration            | Duration of Downtime                                       |
| Fixed               | Downtime starts and stops at the exact start and end times |

#### Add host and host group realtime downtime

If you want to associate a host, host group to a realtime downtime, use the **ADD** action: To set the value of the
start/end, use following format : YYYY/MM/DD HH:mm:

``` shell
centreon -u admin -p centreon -o RTDOWNTIME -a add -v "HOST;central;2017/09/24 10:00;2017/09/24 12:00;1;3600;my comments;1"
centreon -u admin -p centreon -o RTDOWNTIME -a add -v "HG;linux-servers;2017/09/24 10:00;2017/09/24 12:00;1;3600;my comments;1"
```

The required parameters are the following :

| Order | Description                                      |
| ----- | ------------------------------------------------ |
| 1     | Value you want to associate                      |
| 2     | Name of the host (Name of the service)           |
| 3     | Beginning of downtime                            |
| 4     | End of downtime                                  |
| 5     | Type of downtime (1 = fixed, 0 = flexible)       |
| 6     | Duration of downtime for flexible mode (seconds) |
| 7     | Short description of the realtime downtime       |
| 8     | Apply downtime on linked services (0/1)          |

#### Add service and service group realtime downtime

If you want to associate a service or service group to a realtime downtime, use the **ADD** action: To set the value of
the start/end, use following format : YYYY/MM/DD HH:mm:

``` shell
centreon -u admin -p centreon -o RTDOWNTIME -a add -v "SVC;central,ping|central,memory;2017/09/24 10:00;2017/09/24 12:00;1;3600;my comments"
centreon -u admin -p centreon -o RTDOWNTIME -a add -v "SG;servicegroup1;2017/09/24 10:00;2017/09/24 12:00;1;3600;my comments"
```

The required parameters are the following :

| Order | Description                                      |
| ----- | ------------------------------------------------ |
| 1     | Value you want to associate                      |
| 2     | Name of the host (Name of the service)           |
| 3     | Beginning of downtime                            |
| 4     | End of downtime                                  |
| 5     | Type of downtime (1 = fixed, 0 = flexible)       |
| 6     | Duration of downtime for flexible mode (seconds) |
| 7     | Short description of the realtime downtime       |

#### Add instance realtime downtime

In order to add a new realtime downtime for a poller, use the **ADD** action: To set the value of the start/end, use
following format : YYYY/MM/DD HH:mm:

``` shell
centreon -u admin -p centreon -o RTDOWNTIME -a add -v "INSTANCE;Central;2017/09/24 10:00;2017/09/24 12:00;1;3600;my comments
```

The required parameters are the following :

| Order | Description                                      |
| ----- | ------------------------------------------------ |
| 1     | Value you want to associate                      |
| 2     | Name of the poller                               |
| 3     | Beginning of downtime                            |
| 4     | End of downtime                                  |
| 5     | Type of downtime (1 = fixed, 0 = flexible)       |
| 6     | Duration of downtime for flexible mode (seconds) |
| 7     | Short description of the realtime downtime       |

#### Cancel a realtime downtime

In order to cancel a realtime downtime, use the **CANCEL** action: To get the value of the id, use the **SHOW** action:

``` shell
centreon -u admin -p centreon -o RTDOWNTIME -a cancel -v "6|42"
```

The required parameters are the following :

| Order | Description    |
| ----- | -------------- |
| 1     | Id of downtime |

### Resource CFG

Object name: **RESOURCECFG**

#### Show

In order to list available Resource variables, use the **SHOW** action:

``` shell
centreon -u admin -p centreon -o RESOURCECFG -a show
id;name;value;comment;activate;instance
1;$USER1$;/usr/local/nagios/libexec;path to the plugins;1;Central
[...]
```

Columns are the following :

| Column   | Description                                  |
| -------- | -------------------------------------------- |
| ID       | ID                                           |
| Name     | Name                                         |
| Value    | Value of $USERn$ macro                       |
| Comment  | Comment                                      |
| Activate | *1* when activated, *0* otherwise            |
| Instance | Instances that are tied to the $USERn$ macro |

#### Add

In order to add a resource macro, use the **ADD** action:

``` shell
centreon -u admin -p centreon -o RESOURCECFG -a add -v "USER2;public;Poller test;my comment"
```

Required fields are:

| Column    | Description                              |
| --------- | ---------------------------------------- |
| Name      | Macro name; do not use the $ symbols     |
| Value     | Macro value                              |
| Instances | Instances that are tied to $USERn$ macro |
| Comment   | Comment                                  |

#### Del

If you want to remove a Resource variable, use the **DEL** action. The ID is used for identifying the variable to
delete:

``` shell
centreon -u admin -p centreon -o RESOURCECFG -a del -v "1"
```

#### Setparam

If you want to change a specific parameter of a Resource macro, use the **SETPARAM** action. The ID is used for
identifying the macro to update:

``` shell
centreon -u admin -p centreon -o RESOURCECFG -a setparam -v "1;instance;Poller test|AnotherPoller"
```

Arguments are composed of the following columns:

| Order  | Column description                  |
| ------ | ----------------------------------- |
| 1      | ID number of resource configuration |
| 2      | Parameter name                      |
| 3      | Parameter value                     |

Parameters that you may change are:

| Column   | Description                                               |
| -------- | --------------------------------------------------------- |
| name     | Macro name; do not use the $ symbols                      |
| value    | Macro value                                               |
| activate | *1* when activated, *0* otherwise                         |
| comment  | Comment                                                   |
| instance | Instances that are tied to $USERn$ macro Use delimiter \* |

### Service categories

Object name: **SC**

#### Show

In order to list available service categories, use the **SHOW** action:

``` shell
centreon -u admin -p centreon -o SC -a show
id;name;description
1;Ping;ping
2;Traffic;traffic
3;Disk;disk
```

Columns are the following:

| Column      | Description                     |
| ----------- | ------------------------------- |
| Name        | Name of service category        |
| Description | Description of service category |

#### Add

In order to add a service category, use the **ADD** action:

``` shell
centreon -u admin -p centreon -o SC -a ADD -v "Alfresco;Alfresco Services"
```

Required parameters are:

| Column      | Description                     |
| ----------- | ------------------------------- |
| Name        | Name of service category        |
| Description | Description of service category |

#### Del

In order to remove a service category, use the **DEL**:

``` shell
centreon -u admin -p centreon -o SC -a del -v "Alfresco"
```

#### Setparam

In order to change parameters for a service category, use the **SETPARAM** action:

``` shell
centreon -u admin -p centreon -o SC -a setparam -v "SG1;name;Web Service"
```

You can change the following parameters:

| Parameter   | Description                     |
| ----------- | ------------------------------- |
| Name        | Name of service category        |
| Description | Description of service category |

#### Getservice and Getservicetemplate

In order to view the member list of a service category, use the **GETSERVICE** or **GETSERVICETEMPLATE** action:

``` shell
centreon -u admin -p centreon -o SC -a getservice -v "Ping-Category"
host id;host name;service id;service description
14;Centreon-Server;27;Ping
27;srv-web;42;Ping
```

``` shell
centreon -u admin -p centreon -o SC -a getservicetemplate -v "Ping-Category"
template id;service template description
22;Ping-LAN
23;Ping-WAN
```

#### Addservice, Setservice , Addservicetemplate and Setservicetemplate

In order to add a new element to a specific service category, you use the following action **ADDSERVICETEMPLATE**, where
*add* will append and *set* will overwrite previous definitions:

``` shell
centreon -u admin -p centreon -o SC -a addservicetemplate -v "Ping-Category;my template" 
```

#### Delservice and Delservicetemplate

In order to remove a service from a specific service category, use the **DELSERVICE** OR **DELSERVICETEMPLATE** actions:

``` shell
centreon -u admin -p centreon -o SC -a delservice -v "Ping-Category;my host,my service"
```

``` shell
centreon -u admin -p centreon -o SC -a delservicetemplate -v "Ping-Category;my template" 
```

#### Setseverity

In order to turn a service category into a severity, use the **SETSEVERITY** action:

``` shell
centreon -u admin -p centreon -o SC -a setseverity -v "Critical;3;16x16/critical.gif" 
```

The needed parameters are the following:

| Order | Description                       |
| ----- | --------------------------------- |
| 1     | Service category name             |
| 2     | Severity level - must be a number |
| 3     | Icon that represents the severity |

#### Unsetseverity

In order to turn a severity into a regular service category, use the **UNSETSEVERITY** action:

``` shell
centreon -u admin -p centreon -o SC -a unsetseverity -v "Critical" 
```

The needed parameters are the following:

| Order | Description           |
| ----- | --------------------- |
| 1     | Service category name |

### Service groups

Object name: **SG**

#### Show

In order to list available servicegroups, use the **SHOW** action:

``` shell
centreon -u admin -p centreon -o SG -a show
id;name;alias
11;Alfresco;Alfresco Services
```

#### Add

In order to add a servicegroup, use the **ADD** action:

``` shell
centreon -u admin -p centreon -o SG -a ADD -v "Alfresco;Alfresco Services"
```

Required fields are:

| Order | Description            |
| ----- | ---------------------- |
| 1     | Name of service group  |
| 2     | Alias of service group |

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Del

In order to remove a servicegroup, use the **DEL** action:

``` shell
centreon -u admin -p centreon -o SG -a del -v "Alfresco"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Setparam

In order to change parameters for a servicegroup, use the **SETPARAM** action:

``` shell
centreon -u admin -p centreon -o SG -a setparam -v "SG1;name;Web Service"
```

You can change the following parameters:

| Parameter | Description                              |
| --------- | ---------------------------------------- |
| activate  | *1* when service is enabled, 0 otherwise |
| name      | Name of service group                    |
| alias     | Alias of service group                   |
| comment   | Comments regarding service group         |

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Getservice and Gethostgroupservice

In order to view the members of a service group, use the **GETSERVICE** or **GETHOSTGROUPSERVICE** actions:

``` shell
centreon -u admin -p centreon -o SG -a getservice -v "Web-Access"
host id;host name;service id;service description
14;Centreon-Server;28;http
14;Centreon-Server;29;TCP-80
```

``` shell
centreon -u admin -p centreon -o SG -a gethostgroupservice -v "Web-Access"
hostgroup id;hostgroup name;service id;service description
22;Web group;31;mysql
```

> ***NOTE:*** *hostgroupservice* is a service by hostgroup

#### Addservice, Setservice, Addhostgroupservice and Sethostgroupservice

In order to add a new element to a specific service group, you can use **ADDSERVICE**, **SETSERVICE**,
**ADDHOSTGROUPSERVICE**, **SETHOSTGROUPSERVICE** where *add* will append and *set* will overwrite previous definitions:

``` shell
centreon -u admin -p centreon -o SG -a addservice -v "Web-Access;www.centreon.com,http"
centreon -u admin -p centreon -o SG -a setservice -v "Web-Access;www.centreon.com,TCP-80|www.centreon.com,http|www.centreon.com,mysql"
centreon -u admin -p centreon -o SG -a sethostgroupservice -v "Web-Access;web group,TCP-80"
```

> ***NOTE:*** *hostgroupservice* is a service by hostgroup

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Delservice and Delhostgroupservice

In order to remove a service from a service group, use the **DELSERVICE** or **DELHOSTGROUPSERVICE** actions:

``` shell
centreon -u admin -p centreon -o SG -a delservice -v "Web-Access;www.centreon.com,http"
centreon -u admin -p centreon -o SG -a delhostgroupservice -v "Web-Access;Web group,mysql"
```

> ***NOTE:*** *hostgroupservice* is a service by hostgroup

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

### Services

Object name: **SERVICE**

#### Show

In order to list available service, use the **SHOW** action:

``` shell
centreon -u admin -p centreon -o SERVICE -a show
host id;host name;id;description;check command;check command arg;normal check interval;retry check interval;max check attempts;active checks enabled;passive checks enabled;activate
14;Centreon-Server;19;Disk-/;;;;;;2;2;1
14;Centreon-Server;20;Disk-/home;;;;;;2;2;1
14;Centreon-Server;21;Disk-/opt;;;;;;2;2;1
14;Centreon-Server;22;Disk-/usr;;;;;;2;2;1
14;Centreon-Server;23;Disk-/var;;;;;;2;2;1
14;Centreon-Server;151;Load;;;;;;2;2;1
14;Centreon-Server;25;Memory;;;;;;2;2;1
14;Centreon-Server;26;Ping;;;;;;2;2;0
14;Centreon-Server;40;dummy;check_centreon_dummy;!2!critical;;;;2;2;1
```

Columns are the following:

| Column                | Description                                        |
| --------------------- | -------------------------------------------------- |
| Host ID               | Host ID                                            |
| Host name             | Host name                                          |
| Service ID            | Service ID                                         |
| Service description   | Service description                                |
| Check Command         | Check command                                      |
| Command arguments     | Check command arguments                            |
| Normal check interval | Normal check interval                              |
| Retry check interval  | Retry check interval                               |
| Max check attempts    | Maximum check attempts                             |
| Active check enable   | *1* when active checks are enabled, *0* otherwise  |
| Passive check enable  | *1* when passive checks are enabled, *0* otherwise |
| Activate              | *1* when enabled, *0* when disabled                |

#### Add

In order to add a service, use the **ADD** action:

``` shell
centreon -u admin -p centreon -o SERVICE -a add -v "Host-Test;ping;Ping-LAN" 
```

The required fields are:

| Order | Description                                                 |
| ----- | ----------------------------------------------------------- |
| 1     | Host name                                                   |
| 2     | Service description                                         |
| 3     | Service template - Only one service template can be defined |

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Del

In order to remove a service, use the **DEL** action:

``` shell
centreon -u admin -p centreon -o SERVICE -a del -v "test;ping"
```

The required fields are:

| Order | Description         |
| ----- | ------------------- |
| 1     | Host name           |
| 2     | Service description |

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Setparam

In order to set a specific paremeter for a particular service, use the **SETPARAM** action:

``` shell
centreon -u admin -p centreon -o SERVICE -a setparam -v "test;ping;max_check_attempts;10"
centreon -u admin -p centreon -o SERVICE -a setparam -v "test;ping;normal_check_interval;2"
centreon -u admin -p centreon -o SERVICE -a setparam -v "test;ping;normal_check_interval;10"
```

The required fields are:

| Order | Description                       |
| ----- | --------------------------------- |
| 1     | Host name                         |
| 2     | Service description               |
| 3     | Parameter that you want to update |
| 4     | New parameter value               |

Parameters that may be modified:

| Parameter                      | Description                                                                                   |
| ------------------------------ | --------------------------------------------------------------------------------------------- |
| activate                       | *1* when service is enabled, 0 otherwise                                                      |
| description                    | Description                                                                                   |
| template                       | Name of the service template                                                                  |
| is\_volatile                   | *1* when service is volatile, *0* otherwise                                                   |
| check\_period                  | Name of the check period                                                                      |
| check\_command                 | Name of the check command                                                                     |
| check\_command\_arguments      | Arguments that go along with the check command, prepend each argument with the '\!' character |
| max\_check\_attempts           | Maximum number of attempt before a HARD state is declared                                     |
| normal\_check\_interval        | value in minutes                                                                              |
| retry\_check\_interval         | value in minutes                                                                              |
| active\_checks\_enabled        | *1* when active checks are enabled, *0* otherwise                                             |
| passive\_checks\_enabled       | *1* when passive checks are enabled, *0* otherwise                                            |
| notifications\_enabled         | *1* when notification is enabled, *0* otherwise                                               |
| contact\_additive\_inheritance | Enables contact additive inheritance                                                          |
| cg\_additive\_inheritance      | Enables contactgroup additive inheritance                                                     |
| notification\_interval         | value in minutes                                                                              |
| notification\_period           | Name of the notification period                                                               |
| notification\_options          | Status linked to notifications                                                                |
| first\_notification\_delay     | First notification delay in seconds                                                           |
| recovery\_notification\_delay  | Recovery notification delay                                                                   |
| obsess\_over\_service          | *1* when obsess over service is enabled, *0* otherwise                                        |
| check\_freshness               | *1* when check freshness is enabled, *0* otherwise                                            |
| freshness\_threshold           | Value in seconds                                                                              |
| event\_handler\_enabled        | *1* when event handler is enabled, *0* otherwise                                              |
| flap\_detection\_enabled       | *1* when flap detection is enabled, *0* otherwise                                             |
| retain\_status\_information    | *1* when status information is retained, *0* otherwise                                        |
| retain\_nonstatus\_information | *1* when non status information is retained, *0* otherwise                                    |
| event\_handler                 | Name of the event handler command                                                             |
| event\_handler\_arguments      | Arguments that go along with the event handler, prepend each argument with the '\!' character |
| notes                          | Notes                                                                                         |
| notes\_url                     | Notes URL                                                                                     |
| action\_url                    | Action URL                                                                                    |
| icon\_image                    | Icon image                                                                                    |
| icon\_image\_alt               | Icon image alt text                                                                           |
| comment                        | Comment                                                                                       |
| service\_notification\_options | Notification options (w,u,c,r,f,s)                                                            |

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Addhost and Sethost

You may want to tie a service to an extra host. In order to do so, use the **ADDHOST** or **SETHOST** actions where
*add* will append and *set* will overwrite previous definitions:

``` shell
centreon -u admin -p centreon -o SERVICE -a sethost -v "host1;ping;host2"
```

``` shell
centreon -u admin -p centreon -o SERVICE -a addhost -v "host1;ping;host2"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Delhost

In order to remove the relation between a host and a service, use the **DELHOST** action:

``` shell
centreon -u admin -p centreon -o SERVICE -a delhost -v "host1;ping;host2"
```

The service ping which was originally linked to host1 and host2 is now only linked to host1.

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Getmacro

In order to view the custom macro list of a service, use the **GETMACRO** action:

``` shell
centreon -u admin -p centreon -o SERVICE -a getmacro -v "host1;ping"
macro name;macro value;is_password;description
$_SERVICETIME$;80;0;description of macro
$_SERVICEPL$;400;0;description of macro
```

#### Setmacro

In order to set a macro for a specific service use the **SETMACRO** action:

``` shell
centreon -u admin -p centreon -o SERVICE -a setmacro -v "test;ping;time;80;0;description of macro"
centreon -u admin -p centreon -o SERVICE -a setmacro -v "test;ping;pl;400;0;description of macro"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Delmacro

In order to remove a macro from a specific service use the **DELMACRO** action:

``` shell
centreon -u admin -p centreon -o SERVICE -a delmacro -v "test;ping;time"
centreon -u admin -p centreon -o SERVICE -a delmacro -v "test;ping;pl"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Setseverity

In order to associate a severity to a service, use the **SETSEVERITY** action:

``` shell
centreon -u admin -p centreon -o SERVICE -a setseverity -v "Centreon-Server;ping;Critical"
```

Required parameters:

| Order | Description         |
| ----- | ------------------- |
| 1     | Host name           |
| 2     | Service description |
| 3     | Severity name       |

#### Unsetseverity

In order to remove the severity from a service, use the **UNSETSEVERITY** action:

``` shell
centreon -u admin -p centreon -o SERVICE -a unsetseverity -v "Centreon-Server;ping"
```

Required parameters:

| Order | Description         |
| ----- | ------------------- |
| 1     | Host name           |
| 2     | Service description |

#### Getcontact

In order to view the contact list of a service, use the **GETCONTACT** action:

``` shell
centreon -u admin -p centreon -o "SERVICE" -a getcontact -v "Centreon-Server;Ping"
id;name
28;Contact_1
29;Contact_2
```

#### Addcontact and Setcontact

In order to add a new contact to notification contact list, use the **ADDCONTACT** or **SETCONTACT** actions where *add*
will append and *set* will overwrite previous definitions:

``` shell
centreon -u admin -p centreon -o SERVICE -a addcontact -v "test;ping;User1"
centreon -u admin -p centreon -o SERVICE -a setcontact -v "test;ping;User1|User2"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Delcontact

In order to remove a contact from the notification contact list, use the **DELCONTACT** action:

``` shell
centreon -u admin -p centreon -o SERVICE -a delcontact -v "test;ping;User1"
centreon -u admin -p centreon -o SERVICE -a delcontact -v "test;ping;User2"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Getcontactgroup

In order to view the contact group list of a service, use the **GETCONTACTGROUP** action:

``` shell
centreon -u admin -p centreon -o "SERVICE" -a getcontactgroup -v "Centreon-Server;Ping" 
id;name
28;ContactGroup_1
29;ContactGroup_2
```

#### Addcontactgroup and Setcontactgroup

In order to add a new contactgroup to notification contactgroup list, use the **ADDCONTACTGROUP** or **SETCONTACTGROUP**
actions where *add* will append and *set* will overwrite previous definitions:

``` shell
centreon -u admin -p centreon -o SERVICE -a addcontactgroup -v "test;ping;Group1"
centreon -u admin -p centreon -o SERVICE -a setcontactgroup -v "test;ping;Group1|Group2"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Delcontactgroup

In order to remove a contactgroup from the notification contactgroup list, use **DELCONTACTGROUP** action:

``` shell
centreon -u admin -p centreon -o SERVICE -a delcontactgroup -v "test;ping;Group1"
centreon -u admin -p centreon -o SERVICE -a delcontactgroup -v "test;ping;Group2"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Gettrap

In order to view the trap list of a service, use the **GETTRAP** action:

``` shell
centreon -u admin -p centreon -o "SERVICE" -a gettrap -v "Centreon-Server;Ping"
id;name
48;ciscoConfigManEvent
39;ospfVirtIfTxRetransmit
```

#### Addtrap and Settrap

In order to add a new trap, use the **ADDTRAP** or **SETTRAP** actions where *add* will append and *set* will overwrite
previous definitions:

``` shell
centreon -u admin -p centreon -o SERVICE -a addtrap -v "test;ping;snOspfVirtIfConfigError"
centreon -u admin -p centreon -o SERVICE -a settrap -v "test;ping;snOspfVirtNbrStateChange|snTrapAccessListDeny"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Deltrap

In order to remove a trap from a service, use the **DELTRAP** command:

``` shell
centreon -u admin -p centreon -o SERVICE -a deltrap -v "test;ping;snOspfVirtIfConfigError"
```

### Service templates

Object name: **STPL**

#### Show

In order to list available service, use the **SHOW** action:

``` shell
centreon -u admin -p centreon -o STPL -a show
id;description;check command;check command arg;normal check interval;retry check interval;max check attempts;active checks enabled;passive checks enabled
1;generic-service;generic-service;;;5;1;3;1;0
3;Ping-LAN;Ping;check_centreon_ping;!3!200,20%!400,50%;;;;2;2
4;Ping-WAN;Ping;check_centreon_ping;!3!400,20%!600,50%;;;;2;2
5;SNMP-DISK-/;Disk-/;check_centreon_remote_storage;!/!80!90;;;;2;2
6;SNMP-DISK-/var;Disk-/var;check_centreon_remote_storage;!/var!80!90;;;;2;2
7;SNMP-DISK-/usr;Disk-/usr;check_centreon_remote_storage;!/usr!80!90;;;;2;2
8;SNMP-DISK-/home;Disk-/home;check_centreon_remote_storage;!/home!80!90;;;;2;2
9;SNMP-DISK-/opt;Disk-/opt;check_centreon_remote_storage;!/opt!80!90;;;;2;2
```

Columns are the following :

| Order | Description                                        |
| ----- | -------------------------------------------------- |
| 1     | Service ID                                         |
| 2     | Service Description                                |
| 3     | Check command                                      |
| 4     | Check command arguments                            |
| 5     | Normal check interval                              |
| 6     | Retry check interval                               |
| 7     | Maximum check attempts                             |
| 8     | *1* when active checks are enabled, *0* otherwise  |
| 9     | *1* when passive checks are enabled, *0* otherwise |

#### Add

In order to add a service template, use the **ADD** action:

``` shell
centreon -u admin -p centreon -o STPL -a add -v "MyTemplate;mytemplate;Ping-LAN"
```

The required fields are:

| Order | Description                                                          |
| ----- | -------------------------------------------------------------------- |
| 1     | Service template description                                         |
| 2     | Alias will be used when services are deployed through host templates |
| 3     | Service template; Only one service template can be defined           |

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Del

In order to remove a service template, use the **DEL** action:

``` shell
centreon -u admin -p centreon -o STPL -a del -v "MyTemplate"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Setparam

In order to set a specific parameter for a service template, use the **SETPARAM** action:

``` shell
centreon -u admin -p centreon -o STPL -a setparam -v "MyTemplate;max_check_attempts;10"
centreon -u admin -p centreon -o STPL -a setparam -v "MyTemplate;normal_check_interval;2"
centreon -u admin -p centreon -o STPL -a setparam -v "MyTemplate;normal_check_interval;http://192.168.1.2/admincp"
```

The required fields that you have pass in options are:

| Order | Description                       |
| ----- | --------------------------------- |
| 1     | Service template description      |
| 2     | Parameter that you want to update |
| 3     | New paramater value               |

Parameters that may be modified:

| Parameter                      | Description                                                                                    |
| ------------------------------ | ---------------------------------------------------------------------------------------------- |
| activate                       | 1 when service is enabled, 0 otherwise                                                         |
| description                    | Service template description                                                                   |
| alias                          | Service template alias                                                                         |
| template                       | Name of the service template                                                                   |
| is\_volatile                   | 1 when service is volatile, 0 otherwise                                                        |
| check\_period                  | Name of the check period                                                                       |
| check\_command                 | Name of the check command                                                                      |
| check\_command\_arguments      | Arguments that go along with the check command, prepend each argument with the '\!' characteri |
| max\_check\_attempts           | Maximum number of attempt before a HARD state is declared                                      |
| normal\_check\_interval        | value in minutes                                                                               |
| retry\_check\_interval         | value in minutes                                                                               |
| active\_checks\_enabled        | 1 when active checks are enabled, 0 otherwise                                                  |
| passive\_checks\_enabled       | 1 when passive checks are enabled, 0 otherwise                                                 |
| contact\_additive\_inheritance | Enables contact additive inheritance=                                                          |
| cg\_additive\_inheritance      | Enables contactgroup additive inheritance                                                      |
| notification\_interval         | value in minutes                                                                               |
| notification\_period           | Name of the notification period                                                                |
| notification\_options          | Status linked to notifications                                                                 |
| first\_notification\_delay     | First notification delay in seconds                                                            |
| recovery\_notification\_delay  | Recovery notification delay                                                                    |
| parallelize\_check             | 1 when parallelize checks are enabled, 0 otherwise                                             |
| obsess\_over\_service          | 1 when obsess over service is enabled, 0 otherwise                                             |
| check\_freshness               | 1 when check freshness is enabled, 0 otherwise                                                 |
| freshness\_threshold           | Service freshness threshold in seconds                                                         |
| event\_handler\_enabled        | 1 when event handler is enabled, 0 otherwise                                                   |
| flap\_detection\_enabled       | 1 when flap detection is enabled, 0 otherwise                                                  |
| process\_perf\_data            | 1 when process performance data is enabled, 0 otherwise                                        |
| retain\_status\_information    | 1 when status information is retained, 0 otherwise                                             |
| retain\_nonstatus\_information | 1 when non status information is retained, 0 otherwise                                         |
| stalking\_options              | Comma separated options: 'o' for OK, 'w' for Warning, 'u' for Unknown and 'c' for Critical     |
| event\_handler                 | Name of the event handler command                                                              |
| event\_handler\_arguments      | Arguments that go along with the event handler, prepend each argument with the "\!" character  |
| notes                          | Notes                                                                                          |
| notes\_url                     | Notes URL                                                                                      |
| action\_url                    | Action URL                                                                                     |
| icon\_image                    | Icon image                                                                                     |
| icon\_image\_alt               | Icon image alt text                                                                            |
| graphtemplate                  | Graph template namei                                                                           |
| comment                        | Comment                                                                                        |
| service\_notification\_options | Notification options (w,u,c,r,f,s)                                                             |

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Addhosttemplate and Sethosttemplate

You may want to tie a service template to an extra host template. In order to do so, use the **ADDHOSTTEMPLATE** or
**SETHOSTTEMPLATE** actions where *add* will append and *set* will overwrite previous definitions:

``` shell
centreon -u admin -p centreon -o STPL -a sethosttemplate -v "MyTemplate;generic-host-template"
centreon -u admin -p centreon -o STPL -a addhosttemplate -v "MyTemplate;Linux-Servers"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Delhosttemplate

In order to remove the relation between a host template and a service template, use the **DELHOSTTEMPLATE** action:

``` shell
centreon -u admin -p centreon -o STPL -a delhosttemplate -v "MyTemplate;Linux-Servers"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Getmacro

In order to view the custom macro list of a service template, use the **GETMACRO** action:

``` shell
centreon -u admin -p centreon -o STPL -a getmacro -v "MyTemplate"
macro name;macro value;description;is_password
$_SERVICETIME$;80;description of macro1;0
$_SERVICEPL$;400;description of macro2;0
```

#### Setmacro

In order to set a macro for a specific service template use the **SETMACRO** action:

``` shell
centreon -u admin -p centreon -o STPL -a setmacro -v "MyTemplate;time;80" 
centreon -u admin -p centreon -o STPL -a setmacro -v "MyTemplate;pl;400;description"
centreon -u admin -p centreon -o STPL -a setmacro -v "MyTemplate;password;mypassword;;1"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Delmacro

In order to remove a macro from a specific service template, use the **DELMACRO** action:

``` shell
centreon -u admin -p centreon -o STPL -a delmacro -v "MyTemplate;time"
centreon -u admin -p centreon -o STPL -a delmacro -v "MyTemplate;pl"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Getcontact

In order to view the contact list of a service template, use the **GETCONTACT** action:

``` shell
centreon -u admin -p centreon -o STPL -a getcontact -v "MyTemplate"
id;name
28;Contact_1
29;Contact_2
```

#### Addcontact and Setcontact

In order to add a new contact to notification contact list, use **ADDCONTACT** or **SETCONTACT** actions where *add*
will append and *set* will overwrite previous definitions:

``` shell
centreon -u admin -p centreon -o STPL -a addcontact -v "MyTemplate;User1"
centreon -u admin -p centreon -o STPL -a setcontact -v "MyTemplate;User1|User2"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Delcontact

In order to remove a contact from the notification contact list, use the **DELCONTACT** action:

``` shell
centreon -u admin -p centreon -o STPL -a delcontact -v "MyTemplate;User1"
centreon -u admin -p centreon -o STPL -a delcontact -v "MyTemplate;User2"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Getcontactgroup

In order to view the contactgroup list of a service template, use the **GETCONTACTGROUP** action:

``` shell
centreon -u admin -p centreon -o STPL -a getcontactgroup -v "MyTemplate"
id;name
28;ContactGroup_1
29;ContactGroup_2
```

#### Setcontactgroup

In order to add a new contactgroup to notification contactgroup list, use the **ADDCONTACTGROUP** or **SETCONTACTGROUP**
actions where *add* will append and *set* will overwrite previous definitions:

``` shell
centreon -u admin -p centreon -o STPL -a addcontactgroup -v "MyTemplate;Group1"
centreon -u admin -p centreon -o STPL -a setcontactgroup -v "MyTemplate;Group1|Group2"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Delcontactgroup

In order to remove a contactgroup from the notification contactgroup list, use the **DELCONTACTGROUP** action:

``` shell
centreon -u admin -p centreon -o STPL -a delcontactgroup -v "MyTemplate"
centreon -u admin -p centreon -o STPL -a delcontactgroup -v "MyTemplate;Group1"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Gettrap

In order to view the trap list of a service template, use the **GETTRAP** action:

``` shell
centreon -u admin -p centreon -o "STPL" -a gettrap -v "Ping-LAN"
id;name
48;ciscoConfigManEvent
39;ospfVirtIfTxRetransmit
```

#### Settrap

In order to add a trap to a service template, use the **ADDTRAP** or **SETTRAP** actions where *add* will append and
*set* will overwrite previous definitions:

``` shell
centreon -u admin -p centreon -o STPL -a addtrap -v "Ping-LAN;snOspfVirtIfConfigError"
centreon -u admin -p centreon -o STPL -a settrap -v "Ping-LAN;snOspfVirtNbrStateChange|snTrapAccessListDeny"
```

> ***NOTE:*** You need to generate your configuration file and restart monitoring engine in order to apply changes.

#### Deltrap

In order to remove a trap from a service template, use the **DELTRAP** action:

``` shell
centreon -u admin -p centreon -o STPL -a deltrap -v "Ping-LAN;snOspfVirtIfConfigError"
```

### Settings

Object name: **Settings**

#### Show

In order to list editable settings, use the **SHOW** action:

``` shell
centreon -u admin -p centreon -o SETTINGS -a show
parameter;value
centstorage;1
debug_auth;0
debug_ldap_import;0
debug_nagios_import;0
debug_path;/var/log/centreon/
debug_rrdtool;0
enable_autologin;1
enable_gmt;0
enable_logs_sync;1
enable_perfdata_sync;1
gmt;1
interval_length;60
mailer_path_bin;/bin/mail
nagios_path_img;/usr/share/nagios/html/images/logos/
perl_library_path;/usr/local/lib
rrdtool_path_bin;/usr/bin/rrdtool
snmpttconvertmib_path_bin;/usr/share/centreon/bin/snmpttconvertmib
snmptt_unknowntrap_log_file;snmptrapd.log  
```

#### Setparam

If you want to change a specific parameter of a Vendor, use the **SETPARAM** action:

``` shell
centreon -u admin -p centreon -o SETTINGS -a setparam -v ";"
```

Arguments are composed of the following columns:

| Order | Column description |
| ----- | ------------------ |
| 1     | Parameter name     |
| 2     | Parameter value    |

Parameters that you may change are:

| Column                         | Description                                                                                 | Possible values and examples                  |
| ------------------------------ | ------------------------------------------------------------------------------------------- | --------------------------------------------- |
| centstorage                    | Enable/disable CentStorage                                                                  | Enable: '1', Disable: '0'                     |
| debug\_auth                    | Enable/disable authentication debug                                                         | Enable: '1', Disable: '0'                     |
| debug\_ldap\_import            | Enable/disable LDAP debug                                                                   | Enable: '1', Disable: '0'                     |
| debug\_nagios\_import          | Enable/disable Nagios configuration import                                                  | Enable: '1', Disable: '0'                     |
| debug\_path                    | Debug log files directory                                                                   | /var/log/centreon/                            |
| debug\_rrdtool                 | Enable/disable RRDTool debug                                                                | Enable: '1', Disable: '0'                     |
| enable\_autologin              | Enable/disable autologin                                                                    | Enable: '1', Disable: '0'                     |
| enable\_gmt                    | Enable/disable GMT management                                                               | Enable: '1', Disable: '0'                     |
| enable\_logs\_sync             | Enable/disable CentCore log synchronization (not necessary when using Centreon Broker)      | Enable: '1', Disable: '0'                     |
| enable\_perfdata\_sync         | Enable/disable Centcore PerfData synchronization (not necessary when using Centreon Broker) | Enable: '1', Disable: '0'                     |
| gmt                            | GMT timezone of monitoring system                                                           | 2 (for GMT+2)                                 |
| interval\_length               | Monitoring interval length in seconds (default: 60)                                         | 120                                           |
| mailer\_path\_bin              | Mail client bin path                                                                        | /bin/mail                                     |
| nagios\_path\_img              | Nagios image path                                                                           | /usr/share/nagios/html/images/logos/          |
| perl\_library\_path            | Perl library path                                                                           | /usr/local/lib                                |
| rrdtool\_path\_bin             | RRDTool bin path                                                                            | /usr/bin/rrdtool                              |
| snmpttconvertmib\_path\_bin    | SNMPTT mib converter bin path                                                               | /usr/share/centreon/bin/snmpttconvertmib      |
| snmptt\_unknowntrap\_log\_file | SNMPTT unknown trap log file                                                                | snmptrapd.log                                 |

### Time periods

Object name: **TP**

#### Show

In order to list available time periods, use the **SHOW** action:

``` shell
centreon -u admin -p centreon -o TP -a show
id;name;alias;sunday;monday;tuesday;wednesday;thursday;friday,saturday
1;24x7;24_Hours_A_Day,_7_Days_A_Week;00:00-24:00;00:00-24:00;00:00-24:00;00:00-24:00;00:00-24:00;00:00-24:00;00:00-24:00
2;none;No Time Is A Good Time;;;;;;;
3;nonworkhours;Non-Work Hours;00:00-24:00;00:00-09:00,17:00-24:00;00:00-09:00,17:00-24:00;00:00-09:00,17:00-24:00;00:00-09:00,17:00-24:00;00:00-09:00,17:00-24:00;00:00-24:00
4;workhours;Work hours;;09:00-17:00;09:00-17:00;09:00-17:00;09:00-17:00;09:00-17:00;
```

#### Add

In order to add a Time Period, use the **ADD** action:

``` shell
centreon -u admin -p centreon -o TP -a add -v "Timeperiod_Test;Timeperiod_Test"
```

Required fields are:

| Order | Description |
| ----- | ----------- |
| 1     | Name        |
| 2     | Alias       |

#### Del

If you want to remove a Time Period, use the **DEL** action. The Name is used for identifying the Time Period to delete:

``` shell
centreon -u admin -p centreon -o TP -a del -v "Timeperiod_Test"
```

#### Setparam

If you want to change a specific parameter of a time period, use the **SETPARAM** action. The Name is used for
identifying the Time Period to update:

``` shell
centreon -u admin -p centreon -o TP -a setparam -v "Timeperiod_Test;monday;00:00-24:00"
```

Arguments are composed of the following columns:

| Order | Column description  |
| ----- | ------------------- |
| 1     | Name of time period |
| 2     | Parameter name      |
| 3     | Parameter value     |

Parameters that you may change are:

| Column    | Description                                                                                                       |
| --------- | ----------------------------------------------------------------------------------------------------------------- |
| name      | Name                                                                                                              |
| alias     | Alias                                                                                                             |
| sunday    | Time Period definition for Sunday                                                                                 |
| monday    | Time Period definition for Monday                                                                                 |
| tuesday   | Time Period definition for Tuesday                                                                                |
| wednesday | Time Period definition for Wednesday                                                                              |
| thursday  | Time Period definition for Thursday                                                                               |
| friday    | Time Period definition for Friday                                                                                 |
| saturday  | Time Period definition for Saturday                                                                               |
| include   | example: \[...\] -v "Timeperiod\_Test;include;workhours"; Use delimiter &#124; for multiple inclusion definitions |
| exclude   | example: \[...\] -v "Timeperiod\_Test;exclude;weekend" use delimiter &#124; for multiple exclusion definitions    |

#### Getexception

In order to view the exception list of a time period, use the **GETEXCEPTION** action:

``` shell
centreon -u admin -p centreon -o TP -a getexception -v "mytimeperiod"
days;timerange
january 1;00:00-00:00
december 25;00:00-00:00
```

#### Setexception

In order to set an exception on a timeperiod, use the **SETEXCEPTION** action:

``` shell
centreon -u admin -p centreon -o TP -a setexception -v "mytimeperiod;january 1;00:00-24:00"
```

> ***NOTE:*** If exception does not exist, it will be created, otherwise it will be overwritten.

#### Delexception

In order to delete an exception, use the **DELEXCEPTION** action:

``` shell
centreon -u admin -p centreon -o TP -a delexception -v "mytimeperiod;january 1"
```

Arguments are composed of the following columns:

| Order | Column description                  |
| ----- | ----------------------------------- |
| 1     | Name of timeperiod                  |
| 2     | Exception to remove from timeperiod |

### Traps

Object name: **TRAP**

#### Show

In order to list available traps, use the **SHOW** action:

``` shell
centreon -u admin -p centreon -o TRAP -a show
id;name;oid;manufacturer
576;alertSystemUp;.1.3.6.1.4.1.674.10892.1.0.1001;Dell
577;alertThermalShutdown;.1.3.6.1.4.1.674.10892.1.0.1004;Dell
578;alertTemperatureProbeNormal;.1.3.6.1.4.1.674.10892.1.0.1052;Dell
599;alertFanEnclosureInsertion;.1.3.6.1.4.1.674.10892.1.0.1452;Dell
600;alertFanEnclosureRemoval;.1.3.6.1.4.1.674.10892.1.0.1453;Dell
601;alertFanEnclosureExtendedRemoval;.1.3.6.1.4.1.674.10892.1.0.1454;Dell
602;alertLogNormal;.1.3.6.1.4.1.674.10892.1.0.1552;Dell
605;ccmCLIRunningConfigChanged;.1.3.6.1.4.1.9.9.43.2.0.2;Cisco
[...]
```

#### Add

In order to add a trap, use the **ADD** action:

``` shell
centreon -u admin -p centreon -o TRAP -a add -v "aNewTrap;.1.3.6.1.4.1.11.2.3.9.7.1.0.30"
```

Required fields are:

| Order | Description          |
| ----- | -------------------- |
| 1     | Trap name            |
| 2     | OID of the SNMP Trap |

#### Del

If you want to remove a Trap, use the **DEL** action. The Name is used for identifying the Trap to delete:

``` shell
centreon -u admin -p centreon -o TRAP -a del -v "aNewTrap"
```

#### Setparam

If you want to change a specific parameter of a Trap, use the **SETPARAM** command. The Name is used for identifying the
Trap to update:

``` shell
centreon -u admin -p centreon -o TRAP -a setparam -v "aNewTrap;vendor;3com"
```

Arguments are composed of the following columns:

| Order | Column description |
| ----- | ------------------ |
| 1     | Name of Trap       |
| 2     | Parameter name     |
| 3     | Parameter value    |

Parameters that you may change are:

| Column                     | Description                                                        | Possible values                                              |
| -------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------ |
| name                       | Name                                                               |                                                              |
| comments                   | Comments                                                           |                                                              |
| output                     | Output                                                             |                                                              |
| oid                        | OID                                                                |                                                              |
| status                     | Status                                                             | *ok*, *warning*, *critical*, *unknown* or *0*, *1*, *2*, *3* |
| vendor                     | Vendor name                                                        | A valid vendor name                                          |
| matching\_mode             | Advanced regexp matching mode                                      | *1* to enable, *0* to disable                                |
| reschedule\_svc\_enable    | Whether or not will reschedule service check when trap is received | *1* to enable, *0* to disable                                |
| execution\_command         | Command to be executed when trap is received                       | A valid Unix command line                                    |
| execution\_command\_enable | Whether or not will execute the 'execution\_command'               | *1* to enable, *0* to disable                                |
| submit\_result\_enable     | Whether or not will submit result to Service                       | *1* to enable, *0* to disable                                |

#### Getmatching

In order to display the list of matching rules defined for a specific trap, use the **GETMATCHING** command:

``` shell
centreon -u admin -p centreon -o TRAP -a getmatching -v "aNewTrap"
id;string;regexp;status;order
8;@OUTPUT@;/test/;UNKNOWN;1
```

| Column | Description                         |
| ------ | ----------------------------------- |
| ID     | ID of the matching rule             |
| String | String to match                     |
| Regexp | Matching Regular Expression         |
| Status | Status to submit                    |
| Order  | Priority order of the matching rule |

#### Addmatching

In order to add a matching rule, use the **ADDMATCHING** command:

``` shell
centreon -u admin -p centreon -o TRAP -a addmatching -v "aNewTrap;@OUTPUT@;/test2/;critical"
```

Required fields are:

| Order | Description                 | Possible values                              |
| ----- | --------------------------- | -------------------------------------------- |
| 1     | Trap name                   |                                              |
| 2     | String to match             |                                              |
| 3     | Matching Regular Expression |                                              |
| 4     | Status to submit            | ok, warning, critical, unknown or 0, 1, 2, 3 |

#### Delmatching

In order to delete a matching rule, use the **DELMATCHING** command:

``` shell
centreon -u admin -p centreon -o TRAP -a delmatching -v "8"
```

Required fields are:

| Column | Description             |
| ------ | ----------------------- |
| ID     | ID of the matching rule |

#### Updatematching

In order to delete a matching rule, use the **UPDATEMATCHING** command:

``` shell
centreon -u admin -p centreon -o TRAP -a updatematching -v "8;status;critical"
```

Arguments are composed of the following columns:

| Order | Column description      |
| ----- | ----------------------- |
| 1     | ID of the matching rule |
| 2     | Parameter name          |
| 3     | Parameter value         |

Parameters that you may change are:

| Column | Description                 | Possible values                              |
| ------ | --------------------------- | -------------------------------------------- |
| string | String to match             |                                              |
| order  | Priority order              |                                              |
| status | Status to submit            | ok, warning, critical, unknown or 0, 1, 2, 3 |
| regexp | Matching Regular Expression |                                              |

### Vendors

Object name: **VENDOR**

#### Show

In order to list available vendors, use the **SHOW** action:

``` shell
centreon -u admin -p centreon -o VENDOR -a show
id;name;alias
1;Cisco;Cisco Networks
2;HP;HP Networks
3;3com;3Com
4;Linksys;Linksys
6;Dell;Dell
7;Generic;Generic
9;Zebra;Zebra
11;HP-Compaq;HP and Compaq Systems
```

#### Add

In order to add a Vendor, use the **ADD** action:

``` shell
centreon -u admin -p centreon -o VENDOR -a add -v "DLink;DLink routers"
```

Required fields are:

| Order | Description |
| ----- | ----------- |
| 1     | Name        |
| 2     | Alias       |

#### Del

If you want to remove a Vendor, use the **DEL** action. The Name is used for identifying the Vendor to delete:

``` shell
centreon -u admin -p centreon -o VENDOR -a del -v "DLink"
```

#### Setparam

If you want to change a specific parameter of a Vendor, use the **SETPARAM** command. The Name is used for identifying
the Vendor to update:

``` shell
centreon -u admin -p centreon -o VENDOR -a setparam -v "3com;name;HP"
```

Arguments are composed of the following columns:

| Order | Column description |
| ----- | ------------------ |
| 1     | Name of vendor     |
| 2     | Parameter name     |
| 3     | Parameter value    |

Parameters that you may change are:

| Column      | Description |
| ----------- | ----------- |
| name        | Name        |
| alias       | Alias       |
| description | Description |

#### Generatetraps

It is possible to generate new SNMP traps from a given MIB file. In order to do so, use the **GENERATETRAPS** command:

``` shell
centreon -u admin -p centreon -o VENDOR -a generatetraps -v "3com;/usr/share/mymibs/3com/A3COM-SWITCHING-SYSTEMS-MIB.mib"
[...]
Done

Total translations:        10
Successful translations:   10
Failed translations:       0
```

> ***NOTE:*** Make sure to put all the mib file dependencies in the /usr/share/snmp/mibs/ directory before starting the
> generation. Then, remove them when it is done.

Required fields are:

| Column   | Description       |
| -------- | ----------------- |
| Name     | Name of Vendor    |
| Mib file | File path of .mib |



## Service Mapping

The service mapping capabilities in Centreon relies on the **Centreon Business Activity Monitoring (BAM)** extension. 


> Centreon BAM is a Centreon **extension** that requires a valid license key. To purchase one and retrieve
the necessary repositories, contact [Centreon](mailto:sales@centreon.com).

### Business View

Object name: **BV**

#### SHOW

To list available BVs, use the **SHOW** action:

    ./centreon -u admin -p centreon -o BV -a SHOW
    id;name;description
    4;BV1;BV1
    5;BV2;BV2
    6;BV4;BV3
    [...]

The following columns are required:

| Column         | Description               |
|----------------|---------------------------|
| BV ID          | Business View id          |
| BV name        | Business View name        |
| BV description | Business View description |

#### ADD

To add a BV, use the **ADD** action:

    ./centreon -u admin -p centreon -o BV -a ADD -v 'BV1;BV1'

The following columns are required:

|Column           |Description                |
|-----------------|---------------------------|
|Name             |Business View name         |
|Description      | Business View description |

#### DEL

To remove a BV, use the **DEL** action:

    ./centreon -u admin -p centreon -o BV -a DEL -v 'BV1'

#### SETPARAM

To change specific parameters for a BV, use the **SETPARAM** action:

    ./centreon -u admin -p centreon -o BV -a SETPARAM -v 'BV1;description;BV description'

You can change the following parameters:

| Parameter   | Description                   |
|-------------|-------------------------------|
| name        | Business Activity name        |
| description | Business Activity description |
| overview    | Visible in overview (0 or 1)  |

#### SETBA

To set the Business Activity (BA) to a BV, use the **SETBA** action:

    ./centreon -u admin -p centreon -o BV -a SETBA -v 'bv1;ba1'

The following columns are required:

| Column  | Description                                             |
|---------|---------------------------------------------------------|
| Bv name | Business View name                                      |
| Ba name | Business Activity name (multiple with "pipe" separator) |

#### ADDBA

To add BA to a BV, use the **ADDBA** action:

    ./centreon -u admin -p centreon -o BV -a ADDBA -v 'bv1;ba1'

The following columns are required:

|  Column |  Description                                                |
|---------|-------------------------------------------------------------|
|  Bv name|   Business View name                                        |
|  Ba name|   Business Activity name (multiple with a "pipe" separator) |  

#### DELBA

To delete a BA from a BV, use the **DELBA** action:

    ./centreon -u admin -p centreon -o BV -a DELBA -v 'bv1;ba1'

The following columns are required:

| Column   | Description                                                     |
|----------|-----------------------------------------------------------------|
|  Bv name |  Business View name                                             |
|  Ba name |  Business Activity name (multiple with a "pipe" separator)      |

#### SETACLGROUP

To set an ACL group to a BV, use the **SETACLGROUP** action:

    ./centreon -u admin -p centreon -o BV -a SETACLGROUP -v 'bv1;ALL'

The following columns are required:

|  Column        |         Description                                             |
|----------------|-----------------------------------------------------------------|
| Bv name        |  Business View name                                             |
|  Acl group name|   Acl group name (multiple with a pipe separator)               |

#### ADDACLGROUP

To add an ACL group to a BV, use the **ADDACLGROUP** action:

    ./centreon -u admin -p centreon -o BV -a ADDACLGROUP -v 'bv1;ALL'

The following columns are required:

|  Column        |   Description
|----------------|-----------------------------------------------------------------|
|  Bv name       |   Business View name                                            |
|  Acl group name|   Acl group name (multiple with a "pipe" separator)             |

#### DELACLGROUP

To delete an ACL group from a BV, use the **DELACLGROUP** action:

    ./centreon -u admin -p centreon -o BV -a DELACLGROUP -v 'bv1;ALL'

The following columns are required:

|  Column        |   Description
|----------------|-----------------------------------------------------------------|
|  Bv name       |   Business View name                                            |
|  Acl group name|   Acl group name (multiple with a "pipe" separator)             |

### Business Activity (BA)

Object name: **BA**

#### SHOW

To list available business activities, use the **SHOW** action:

    ./centreon -u admin -p centreon -o BA -a SHOW
    id;name;description;state_source;level_w;level_c;notification_interval
    1;ba1;ba1;1;80;70;3
    2;ba2;ba2;2;;;2
    3;ba3;ba3;3;;;
    [...]

The following columns are displayed:

  * BA ID: Business Activity id
  * BA name: Business Activity name
  * Ba description: Business Activity description
  * Ba state_source: Business Activity Calculation Method
  * level\_w: Warning threshold (only applicable for Impact and Ratio modes)
  * level\_c: Critical threshold (only applicable for Impact and Ratio modes)
  
Business Activity Calculation Methods (state_source):
  * 0 - Impact Mode (requires level\_w to be > level\_c)
  * 1 - Best Status
  * 2 - Worst Status
  * 3 - Ratio Percentage (requires level\_c to be > level\_w)
  * 4 - Ratio Number (requires level\_c to be > level\_w)

#### ADD

To add a BA, use the **ADD** action:

    ./centreon -u admin -p centreon -o BA -a ADD -v 'ba1;ba1;0;90;80;5'

The following columns are required:

  |Column                  | Description                     |
  |------------------------|---------------------------------|
  |Name                    | Business Activity name          |
  |Description             | Business Activity description   |
  |State Source            | BA Calcuation Method            |
  |Warning threshold       | Warning threshold (if needed)   |
  |Critical threshold      | Critical threshold (if needed)  |
  |Notification interval   | Notification interval (minutes) |

#### DEL

To remove a BA, use the **DEL** action:

    ./centreon -u admin -p centreon -o BA -a DEL -v 'ba1'

#### SETPARAM

To change a specific parameters for a BV, use the **SETPARAM** action:

    ./centreon -u admin -p centreon -o BA -a SETPARAM -v 'ba1;enable;1'
    ./centreon -u admin -p centreon -o BA -a SETPARAM -v 'ba1;comment;new comments'
    ./centreon -u admin -p centreon -o BA -a SETPARAM -v 'ba1;notification_options;r,w,c'

Parameters that you can change are the following:

  |Parameter                       |Description                                                          |
  |--------------------------------|---------------------------------------------------------------------|
  |name                            |Business Activity name                                               |
  |description                     |Business Activity description                                        |
  |level\_w                        |Warning threshold                                                    |
  |level\_c                        |Critical threshold                                                   |        
  |reporting\_period               |reporting period                                                     |
  |comment                         |Comments                                                             |
  |notifications\_enabled          |Enable notifications (0 or 1)                                        |
  |notification\_options           |Notification options (r, w, c, f)                                    |
  |notification\_period            |Notification period                                                  |
  |notification\_interval          |Notification interval                                                |
  |first\_notification\_delay      |Delay before sending first notification when entering non-OK status  |
  |recovery\_notification\_delay   |Delay before sending first notification when entering OK status      |
  |icon                            |Business Activity icon                                               |
  |inherit\_kpi\_downtimes         |Inherit planned downtimes from KPIs (0 or 1)                         |
  |geo_coords                      |Geo-coordinate to position the BA                                    |
  |enable                          |Enable (0 or 1)                                                      |
  |state_source                    |0 - Impact, 1 - Best, 2 - Worst, 3 - Ratio Nr., 4 - Ratio Percent    |
  
> Note: Changing State Source will require updating your Level W and Level C to match the appropriate 
>   Calculation Method!

#### SETBV

To set a BV to a BA, use the **SETBV** action:

    ./centreon -u admin -p centreon -o BA -a SETBV -v 'ba1;bv1'
    ./centreon -u admin -p centreon -o BA -a SETBV -v 'ba1;bv1|bv2'

The following columns are required:

  Column    Description
  --------- -------------------------------------------------
  Ba name   Business Activity name
  Bv name   Business View name (multiple with \| seperator)

#### ADDBV

To add a BV to a BA, use the **ADDBV** action:

    ./centreon -u admin -p centreon -o BA -a ADDBV -v 'ba1;bv1'
    ./centreon -u admin -p centreon -o BA -a ADDBV -v 'ba1;bv2|bv3'

The following columns are required:

| Column   | Description                                                     |
|----------|-----------------------------------------------------------------|
|  Ba name |  Business Aiew name                                             |
|  Bv name |  Business View name (multiple with a "pipe" separator)          |

#### DELBV

To delete a BV from a BA, use the **DELBV** action:

    ./centreon -u admin -p centreon -o BA -a DELBV -v 'ba1;bv1'

The following columns are required:

| Column   | Description                                                     |
|----------|-----------------------------------------------------------------|
|  Ba name |  Business Aiew name                                             |
|  Bv name |  Business View name (multiple with a "pipe" separator)          |

#### SETCONTACTGROUP

To set contact group to a BA, use the **SETCONTACTGROUP** action:

    ./centreon -u admin -p centreon -o BA -a SETCONTACTGROUP -v 'ba1;Guest'
    ./centreon -u admin -p centreon -o BA -a SETCONTACTGROUP -v 'ba1;Guest|Supervisors'

The following columns are required:

| Column              | Description                                                     |
|---------------------|-----------------------------------------------------------------|
|  Ba name            |  Business Aiew name                                             |
|  Contact group name |  Contact group name (multiple with a "pipe" separator)          |

#### ADDCONTACTGROUP

To add contact group to a BA, use the **ADDCONTACTGROUP** action:

    ./centreon -u admin -p centreon -o BA -a ADDCONTACTGROUP -v 'ba1;Guest'

The following columns are required:

| Column              | Description                                                     |
|---------------------|-----------------------------------------------------------------|
|  Ba name            |  Business Aiew name                                             |
|  Contact group name |  Contact group name (multiple with a "pipe" separator)          |

#### DELCONTACTGROUP

To delete a contact group from a BA, use the **DELCONTACTGROUP** action:

    ./centreon -u admin -p centreon -o BA -a DELCONTACTGROUP -v 'ba1;Guest'

The following columns are required:

| Column              | Description                                                     |
|---------------------|-----------------------------------------------------------------|
|  Ba name            |  Business Aiew name                                             |
|  Contact group name |  Contact group name (multiple with a "pipe" separator)          |

#### SETEXTRAREPORTINGPERIOD

To set extra reporting periods for Centreon MBI, use the
**SETEXTRAREPORTINGPERIOD** action:

    ./centreon -u admin -p centreon -o BA -a SETEXTRAREPORTINGPERIOD -v 'ba1;workhours'

The following columns are required:

| Column                   | Description                                                     |
|--------------------------|-----------------------------------------------------------------|
|  Ba name                 |  Business Aiew name                                             |
|  Extra reporting period  |  Extra reporting period (multiple with a "pipe" separator)      |

#### ADDEXTRAREPORTINGPERIOD

To add extra reporting periods for Centreon MBI, use the
**ADDEXTRAREPORTINGPERIOD** action:

    ./centreon -u admin -p centreon -o BA -a ADDEXTRAREPORTINGPERIOD -v 'ba1;workhours'

The following columns are required:

| Column                   | Description                                                     |
|--------------------------|-----------------------------------------------------------------|
|  Ba name                 |  Business Aiew name                                             |
|  Extra reporting period  |  Extra reporting period (multiple with a "pipe" separator)      |

#### DELEXTRAREPORTINGPERIOD

To delete extra reporting periods from a BA, use the
**DELEXTRAREPORTINGPERIOD** action:

    ./centreon -u admin -p centreon -o BA -a DELEXTRAREPORTINGPERIOD -v 'ba1;workhours'

The following columns are required:

| Column                   | Description                                                     |
|--------------------------|-----------------------------------------------------------------|
|  Ba name                 |  Business Aiew name                                             |
|  Extra reporting period  |  Extra reporting period (multiple with a "pipe" separator)      |

#### SETPOLLER

To set the poller where the BA is calculated (in addition to central), 
use the **SETPOLLER** action:

    ./centreon -u admin -p centreon -o BA -a SETPOLLER -v 'ba1;poller1'

The following columns are required:

| Column                   | Description                                                     |
|--------------------------|-----------------------------------------------------------------|
|  Ba name                 |  Business Aiew name                                             |
| Poller name              |  Poller name where Business Activity can be calculated          |

#### DELPOLLER

To delete poller where the BA is calculated, use the **DELPOLLER**
action:

    ./centreon -u admin -p centreon -o BA -a DELPOLLER -v 'ba1;poller1'

The following columns are required:

| Column                   | Description                                                     |
|--------------------------|-----------------------------------------------------------------|
|  Ba name                 |  Business Aiew name                                             |
| Poller name              |  Poller name where Business Activity is  calculated             |

### Indicators (KPI)

Object name: **KPI**

#### SHOW

To list available KPI, use the **SHOW** action:

    ./centreon -u admin -p centreon -o KPI -a SHOW
    id;type;name;impacted_ba;warning_impact;critical_impact;unknown_impact
    1;service;Centreon-Server Load;ba1;25;50;20
    2;metaservice;meta1;toto;50;100;75 
    [...]

Columns are the following:

  |Column           |Description                                  |
  |-----------------|---------------------------------------------|   
  |KPI ID           |KPI id                                       | 
  |KPI type         | *service*, *metaservice*, *ba* or *boolean* |
  |KPI name         |KPI name                                     |                       
  |Impacted BA      |Impacted business activity                   | 
  |Warning impact   |Warning impact                               | 
  |Critical impact  |Critical impact                              | 
  |Unknown impact   |Unknown impact                               | 

#### ADD

To add a KPI, use the **ADD** action:

    ./centreon -u admin -p centreon -o KPI -a ADD -v 'service;host1|service1;ba1;10;20;5'
    ./centreon -u admin -p centreon -o KPI -a ADD -v 'metaservice;meta11;ba2;minor;major;null'
    ./centreon -u admin -p centreon -o KPI -a ADD -v 'ba;ba1;ba3;10;20;5'
    ./centreon -u admin -p centreon -o KPI -a ADD -v 'boolean;rule1;ba4;10;20;5'

Required columns are the following:

  |Column           |Description                                  |
  |-----------------|---------------------------------------------|   
  |KPI type         | *service*, *metaservice*, *ba* or *boolean* |
  |Object           | Object used in KPI                          | 
  |Impacted BA      |Impacted business activity                   | 
  |Warning impact   |Warning impact                               | 
  |Critical impact  |Critical impact                              | 
  |Unknown impact   |Unknown impact                               | 

#### DEL

If you want to remove a KPI, use the **DEL** action:

    ./centreon -u admin -p centreon -o KPI -a DEL -v 'ba;ba1;ba3'

#### SETPARAM

If you want to change a specific parameters for a KPI, use the
**SETPARAM** action:

    ./centreon -u admin -p centreon -o KPI -a SETPARAM -v 'service;host1|service1;ba1;enable;0'
    ./centreon -u admin -p centreon -o KPI -a SETPARAM -v 'metaservice;meta1;ba1;warning_impact;50'

Parameters that you can change are the following:

  |Column           |Description                                  |
  |-----------------|---------------------------------------------|   
  |Warning impact   |Warning impact                               | 
  |Critical impact  |Critical impact                              | 
  |Unknown impact   |Unknown impact                               | 
  |impacted\_ba     |Impacted business activity                   |
  |enable           | Enable (0 or 1)                              |

#### SETIMPACTMODE

If you want to change configuration mode, use the **SETIMPACTMODE**
action:

    ./centreon -u admin -p centreon -o KPI -a SETIMPACTMODE -v 'ba;ba1;ba3;advanced'

Parameters that you can change are the following:

  |Parameter     |Description                                 |
  |--------------|--------------------------------------------|
  |KPI type      |*service*, *metaservice*, *ba* or *boolean* |
  |Object        |Object used in KPI                          |
  |Impacted BA   |Impacted business activity                  |
  |Impact mode   |regular or advanced                         |

### Boolean Rule

Object name: **BOOLEANRULE**

#### SHOW

To list available boolean rules, use the **SHOW** action:

    ./centreon -u admin -p centreon -o BOOLEANRULE -a SHOW 
    id;name;expression;bool_state
    8;rule1;expression1;1
    9;rule2;expression2;1
    [...]

The following columns are required:

  |Column           |Description                                           |
  |-----------------|------------------------------------------------------|
  |Rule ID          |Boolean rule id                                       |
  |Rule name        | Boolean rule name                                    |                             
  |Rule expression  |Boolean rule expression                               |
  |Bool state       |Impact is applied when expression returns this state  |

#### ADD

To add a boolean rule, use the **ADD** action:

    ./centreon -u admin -p centreon -o BOOLEANRULE -a ADD -v 'rule1;expression1;1'

The following columns are required:

  |Column           |Description                                           |
  |-----------------|------------------------------------------------------|
  |Rule name        | Boolean rule name                                    |                             
  |Rule expression  |Boolean rule expression                               |
  |Bool state       |Impact is applied when expression returns this state  |

#### DEL

To remove a boolean rule, use the **DEL** action:

    ./centreon -u admin -p centreon -o BOOLEANRULE -a DEL -v 'rule1'

#### SETPARAM

To change a specific parameter for a boolean rule, use the **SETPARAM**
command:

    ./centreon -u admin -p centreon -o BOOLEANRULE -a setparam -v 'rule1;expression;new expression'

Parameters that you can change are the following:

  |Column           |Description                                           |
  |-----------------|------------------------------------------------------|
  |Rule name        | Boolean rule name                                    |                             
  |Rule expression  |Boolean rule expression                               |
  |Bool state       |Impact is applied when expression returns this state  |


## Poller management

### List available pollers

In order to list available pollers, use the **POLLERLIST** command:

``` shell
centreon -u admin -p centreon -a POLLERLIST
poller_id;name
1;Local Poller
2;Remote Poller
```

### Generate local configuration files for a poller

In order to generate configuration files for poller "Local Poller" of id 1, use the **POLLERGENERATE** command:

``` shell
centreon -u admin -p centreon -a POLLERGENERATE -v 1
Configuration files generated for poller 1
```

You can generate the configuration using the poller name:

``` shell
centreon -u admin -p centreon -a POLLERGENERATE -v "Local Poller"
Configuration files generated for poller 'Local Poller'
```

### Test monitoring engine configuration of a poller

In order to test configuration files for poller "Remote Poller" of id 2, use the **POLLERTEST** command:

``` shell
centreon -u admin -p centreon -a POLLERTEST -v 1
OK: Nagios Poller 2 can restart without problem...
```

You can test the configuration using the poller name:

``` shell
centreon -u admin -p centreon -a POLLERTEST -v "Local Poller"
Warning: Nagios Poller poller can restart but configuration is not optimal. Please see debug bellow :
---------------------------------------------------------------------------------------------------
[1440681047] [15559] Reading main configuration file '/usr/share/centreon//filesGeneration/nagiosCFG/5/nagiosCFG.DEBUG'.
[1440681047] [15559] Processing object config file '/usr/share/centreon/filesGeneration/nagiosCFG/5/hosts.cfg'
[1440681047] [15559] Processing object config file '/usr/share/centreon/filesGeneration/nagiosCFG/5/hostTemplates.cfg'
[1440681047] [15559] Processing object config file '/usr/share/centreon/filesGeneration/nagiosCFG/5/serviceTemplates.cfg'
[1440681047] [15559] Processing object config file '/usr/share/centreon/filesGeneration/nagiosCFG/5/services.cfg'
[1440681047] [15559] Processing object config file '/usr/share/centreon/filesGeneration/nagiosCFG/5/misccommands.cfg'
[1440681047] [15559] Processing object config file '/usr/share/centreon/filesGeneration/nagiosCFG/5/checkcommands.cfg'
[1440681047] [15559] Processing object config file '/usr/share/centreon/filesGeneration/nagiosCFG/5/contactgroups.cfg'
[1440681047] [15559] Processing object config file '/usr/share/centreon/filesGeneration/nagiosCFG/5/contactTemplates.cfg'
[1440681047] [15559] Processing object config file '/usr/share/centreon/filesGeneration/nagiosCFG/5/contacts.cfg'
[1440681047] [15559] Processing object config file '/usr/share/centreon/filesGeneration/nagiosCFG/5/hostgroups.cfg'
[1440681047] [15559] Processing object config file '/usr/share/centreon/filesGeneration/nagiosCFG/5/servicegroups.cfg'
[1440681047] [15559] Processing object config file '/usr/share/centreon/filesGeneration/nagiosCFG/5/timeperiods.cfg'
[1440681047] [15559] Processing object config file '/usr/share/centreon/filesGeneration/nagiosCFG/5/escalations.cfg'
[1440681047] [15559] Processing object config file '/usr/share/centreon/filesGeneration/nagiosCFG/5/dependencies.cfg'
[1440681047] [15559] Processing object config file '/usr/share/centreon/filesGeneration/nagiosCFG/5/connectors.cfg'
[1440681047] [15559] Processing object config file '/usr/share/centreon/filesGeneration/nagiosCFG/5/centreon-bam-command.cfg'
[1440681047] [15559] Processing object config file '/usr/share/centreon/filesGeneration/nagiosCFG/5/centreon-bam-contact.cfg'
[1440681047] [15559] Processing object config file '/usr/share/centreon/filesGeneration/nagiosCFG/5/centreon-bam-contactgroup.cfg'
[1440681047] [15559] Processing object config file '/usr/share/centreon/filesGeneration/nagiosCFG/5/centreon-bam-dependencies.cfg'
[1440681047] [15559] Processing object config file '/usr/share/centreon/filesGeneration/nagiosCFG/5/centreon-bam-escalations.cfg'
[1440681047] [15559] Processing object config file '/usr/share/centreon/filesGeneration/nagiosCFG/5/centreon-bam-host.cfg'
[1440681047] [15559] Processing object config file '/usr/share/centreon/filesGeneration/nagiosCFG/5/centreon-bam-services.cfg'
[1440681047] [15559] Processing object config file '/usr/share/centreon/filesGeneration/nagiosCFG/5/centreon-bam-timeperiod.cfg'
[1440681047] [15559] Reading resource file '/usr/share/centreon/filesGeneration/nagiosCFG/5/resource.cfg'
[1440681047] [15559] Checking global event handlers...
[1440681047] [15559] Checking obsessive compulsive processor commands...
[1440681047] [15559]
[1440681047] [15559] Checked 55 commands.
[1440681047] [15559] Checked 0 connectors.
[1440681047] [15559] Checked 7 contacts.
[1440681047] [15559] Checked 0 host dependencies.
[1440681047] [15559] Checked 0 host escalations.
[1440681047] [15559] Checked 0 host groups.
[1440681047] [15559] Checked 1 hosts.
[1440681047] [15559] Checked 0 service dependencies.
[1440681047] [15559] Checked 0 service escalations.
[1440681047] [15559] Checked 0 service groups.
[1440681047] [15559] Checked 1 services.
[1440681047] [15559] Checked 5 time periods.
[1440681047] [15559]
[1440681047] [15559] Total Warnings: 1
[1440681047] [15559] Total Errors:   0

---------------------------------------------------------------------------------------------------
Return code end : 0
```

### Move monitoring engine configuration files

In order to move configuration files for poller "Local Poller" of id 1 to the final engine directory, use the
**CFGMOVE** command:

``` shell
centreon -u admin -p centreon -a CFGMOVE -v 2
OK: All configuration will be send to 'Remote Poller' by centcore in several minutes.
Return code end : 1
```

You can move the configuration files using the poller name:

``` shell
centreon -u admin -p centreon -a CFGMOVE -v "Remote Poller"
OK: All configuration will be send to 'Remote Poller' by centcore in several minutes.
Return code end : 1
```

### Restart monitoring engine of a poller

In order to restart the monitoring process on poller "Local Poller" of id 1, use the the **POLLERRESTART** command:

``` shell
centreon -u admin -p centreon -a POLLERRESTART -v 2
OK: A restart signal has been sent to 'Remote Poller'
Return code end : 1
```

You can restart the poller using its name:

``` shell
centreon -u Remote Poller -p centreon -a POLLERRESTART -v "Remote Poller"
OK: A restart signal has been sent to 'Remote Poller'
Return code end : 1
```

### All in one command

Use the **APPLYCFG** command in order to execute all of the above with one single command:

``` shell
centreon -u admin -p centreon -a APPLYCFG -v 1
```

You can execute using the poller name:

``` shell
centreon -u admin -p centreon -a APPLYCFG -v "Remote Poller"
```

This will execute **POLLERGENERATE**, **POLLERTEST**, **CFGMOVE** and **POLLERRELOAD**.

### Reload monitoring engine of a poller

In order to reload the monitoring process on poller "Remote Poller" of id 2, use the **POLLERRELOAD** command:

``` shell
centreon -u admin -p centreon -a POLLERRELOAD -v 2
OK: A reload signal has been sent to Remote Pollerpoller'
Return code end : 1
```

You can reload poller using its name:

``` shell
centreon -u admin -p centreon -a POLLERRELOAD -v "Remote Poller"
OK: A reload signal has been sent to 'Remote Poller'
Return code end : 1
```

### Execute post generation commands of a poller

In order to execute post generation commands of a poller, use the **POLLEREXECCMD** command:

``` shell
centreon -u admin -p centreon -a POLLEREXECCMD -v 2
Running configuration check...done.
Reloading nagios configuration...done
```

You can execute post generation commands of a poller using its name:

``` shell
centreon -u admin -p centreon -a POLLEREXECCMD -v "Remote Poller"
Running configuration check...done.
Reloading nagios configuration...done
```

## Import/Export

### Export

At some point, you might need to export all of the object configuration parameters into a plain text file, either for
synchronizing or backuping purpose.

The following items will not be exported:

* Escalation
* ACL (ACL Groups, ACL Resources, ACL actions)
* LDAP settings
* Global Centreon settings

This export feature is ran like this:

``` shell
centreon -u admin -p centreon -e > /tmp/clapi-export.txt
```

This will generate CLAPI commands and redirect them to the */tmp/clapi-export.txt* file.

This file can now be read by the import command.

With this, you can also build your own CLAPI command file if you know the straight forward syntax.

For instance:

``` shell
HOST;ADD;Host-Test1;Test host;127.0.0.1;generic-host;Local Poller;Linux
HOST;ADD;Host-Test2;Test host;127.0.0.1;generic-host;Local Poller;Linux
HOST;ADD;Host-Test3;Test host;127.0.0.1;generic-host;Local Poller;Linux
HOST;ADD;Host-Test4;Test host;127.0.0.1;generic-host;Local Poller;Linux
HOST;ADD;Host-Test5;Test host;127.0.0.1;generic-host;Local Poller;Linux
```

### Export of a subset of objects

You can choose to export only predefined hosts or services.

For example, to export all services linked to "srv-mssql-01" host you have to execute following command:

``` shell
centreon -u admin -p centreon -e --select='HOST;srv-mssql-01' --filter-type='^(HOST|SERVICE)$'
```

To export "memory" and "mssql-listener" services execute following command:

``` shell
centreon -e --select='SERVICE;memory' --select='SERVICE;mssql-listener' --filter-type='^SERVICE$'
```

To export all commands run:

``` shell
centreon -u admin -p centreon -o CMD -a show | awk -F\; 'NR > 2 { print "--select=\"CMD;" $2 "\"" }' | xargs --verbose php ./centreon -u admin -p centreon -e
```

### Import

You can import configuration from the exported file */tmp/clapi-export*:

``` shell
centreon -u admin -p centreon -i /tmp/clapi-export.txt
```

In case you have a very large export file, it is advised to redirect the output of the above command to a file. Indeed,
when errors occur during the import process, CLAPI will print out an error message along with the line number of the
file, you might need to store those output message for troubleshooting later on.

You can build your own CLAPI command file if you know the straight forward syntax. You can use parameter described in
Object Management with the syntax you can see in export files :

``` shell
OBJECT;AACTION;Parameter1;Parameter2;Parameter3;...
```

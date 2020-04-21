---
id: dsm
title: Dynamic Service Management
---

Centreon module, Dynamic Service Management (Centreon-DSM) is an extension to manage alarms with an eventlogs system.
With DSM, Centreon can receive events such as SNMP traps resulting from the detection of a problem and assign events
dynamically to a slot defined in Centreon, like a tray events.

A resource has a set number of "slots" (containers) on which alerts will be  assigned (stored). While this event has
not been taken into account by a human action, it will remain visible in the interface Centreon. When event is
acknowledged, the slot becomes available for new events.

The goal of this module is to overhead the basic trap management system of Centreon. The basic function run with a
single service and alarm crashed by successive alarms.

It is an essential complement to the management of SNMP traps.

## Installation

### On a central server

This part is to install **Centreon DSM** on a central server. Centreon DSM server and client will be installed on the
main server.

Run the command:

```shell
yum install centreon-dsm-server centreon-dsm-client
```

After installing the rpm, you have to finish the module installation through the web frontend. Go to
**Administration > Extensions > Manager** menu and search **dsm**:

![image](../../assets/configuration/dsm/module-setup.png)

Your Centreon DSM Module is now installed.

![image](../../assets/configuration/dsm/module-setup-finished.png)

You can now start and enable the daemon on your server:

```shell
systemctl enable dsmd
systemctl start dsmd
```

### On a poller

This part is to install **Centreon DSM** on a poller. Only client will be installed.

Run the command:

```shell
yum install centreon-dsm-client
```

You now have to create an access from the poller to the DBMS server on the **centreon_storage** database.

## Architecture

The event must be transmitted to the server via an SNMP trap. The SNMP trap is thus collected by the
**snmptrapd daemon**. If reception parameters are not valid (authorized community), the event is deleted.

Once the SNMP trap has been received, it is sent to the **centreontrapdforward** script which writes the information
received in a buffer folder (by default: **/var/spool/centreontrapd/**).

The **centreontrapd** service reads the information received in the buffer folder and interprets the traps received
checking, in the centreon database, the actions necessary to process these events. In Centreon DSM we execute a **special command**.

This special command is executing binary **dsmclient.pl** with arguments. This client will store the new trap in a slot
queue that the daemon read every 5 seconds.

The daemon **dsmd.pl** will search in database "centreon" name slots (pool service liabilities) associated with the host.
If no slot is created, the event is deleted. Otherwise, the binary will look if there is at least one free slot. If at
least one slot is free, then it will transmit to monitoring engine external commands to change the state of the slot.
Otherwise the data will be made no secret pending the release of a slot. A slot is releasable served by paying the
liabilities.

## Configuration

### Configure Slots

Go to **Administration > Modules > Dynamic Services** menu and click on **Add**

![image](../../assets/configuration/dsm/form-slot.png)

Please follow the table below in order to understand the role of all parameters:

* **Name**: This is the name of the slot group.
* **Description**: This is the description of the group.
* **Host Name**: The name which host the slots.
* **Service template based**: The base service template use to create service slots on the host. This template must
  have been a passive template. This template must be 100 % passive and a custom macro have to be created on it. The
  macro is named **ALARM_ID** and the default value must be **empty**.
* **Number of slots**: The number of slot that Centreon will create on the selected host when the form will be validated.
* **Slot name prefix**: The prefix is used to give the name of slots. The name will be followed by a number increment
  from 0 to the number of slots.
* **Check command**: This check command is used when the service has to be forced in order to free a slot. The check
  command must have to send a ok return code.
* **Status**: The status of the slot.

An example of passive service template is available below:

![image](../../assets/configuration/dsm/form-passive-service.png)

> The macro **ALARM_ID** is mandatory. The default **empty** value is also necessary.

When you validate the form, Centreon will create or update all slot. If you don't have changed any value, you don't
have to do other action. Else you have to *[deploy the configuration](../monitoring-servers/deploying-a-configuration.html)*.

### Configure traps

The last step is to configure traps that you want to redirect to you slots.

Edit a SNMP trap that you want to redirect to slots systems. Go to **Configuration > SNMP traps > SNMP traps** menu
and edit a SNMP trap definition.

In order to redirect alarms to slots, you have to enable **Execute special command** in the form and add the following
command into the **special command** field:

```shell
/usr/share/centreon/bin/dsmclient.pl -H @HOSTADDRESS@ -o 'Example output : $*' -i 'linkdown' -s 1 -t @TIME@
```

This command launch for each trap received this command in order to redirect alarms to dsmd daemon.

This command take some parameters. You can find in the following table the list and the description of each parameter:

* **-H**: Host address (ip or name) in which you want to redirect the alarm. You can pass the value @HOSTADDRESS@ in
  order to keep the same host or you can use whatever you want in order to centralized all alarms on the same virtual
  host for example who host all alarms.
* **-o**: This is the output that dsm will put when the command will submit the result in the good slot. This output
  can be built will all $* value and with a specific string that you pass in parameter.
* **-i**: This is the id of the alarm. The alarm id can be built with the concatenation of some variables like “$1-$4”.
  The id enable the possibility to use the option of auto-acknowledgement of alarm when you have the possibility to
  create the same id during the opening and the closing treatment of the alarm.
* **-s**: This is the status that you want to pass in parameter to the alarm. You can use @STATUS@ in order to use the
  inherited status build from matching rule system.
* **-t**: This is the time that you want to pass to dsm in order to keep the real trap reception time.
* **-m**: This is the list of macros and its values that you want to update during the treatment of the alarm. Please
  follow the syntax below: macro1=value1|macro2=value2|macro3=value3 This function is used to update some parameters in
  live on Centreon-Engine core memory without a restart.

Your form should now be like that:

![image](../../assets/configuration/dsm/trap-form-2.png)

After saving the form, please generate the
*[SNMP traps database definition](monitoring-with-snmp-traps.html#Applying-the-changes)*.

### Configure Traps links

One thing is different compared to Centreon Trap system is that you cannot link directly the service template of the
slot to the trap in order to not received x time the trap (x represent here the number of slots).

You have to link traps to an active service of the resource, for example the **Ping** service.

## Administration

### Advanced configuration

It is possible to overwrite default configuration of the module by creating/editing the
**/etc/centreon/centreon_dsmd.pm** file:

```shell
%centreon_dsmd_config = (
    # which user will send action
    centreon_user => 'centreon',
    # timeout to send command
    submit_command_timeout => 5,
    # custom macro used to keep alarm ID
    macro_config => 'ALARM_ID',
    # number of alarms retrieve from the cache for analysis
    sql_fetch => 1000,
    # interval in seconds to clean locks
    clean_locks_time => 3600,
    # duration in seconds to keep locks
    clean_locks_keep_stored => 3600,
);

1;
```

### Purging cache

All actions performed by the DSMD engine are logged in the database
**centreon_storage**. A cron is provided to delete the data based on retention.

To modify the retention period, by default **180 days**, you can create/edit the
**/etc/centreon/centreon_dsm_purge.pm** file:

```shell
%centreon_dsm_purge_config = (
    # period in days
    history_time => 180,
);

1;
```

To modify the hour of the cron job, you can edit the **/etc/cron.d/centreon-dsm** file:

```shell
#####################################
# Centreon DSM
#

30 22 * * * root /usr/share/centreon/www/modules/centreon-dsm//cron/centreon_dsm_purge.pl --config='/etc/centreon/conf.pm' --severity=error >> /var/log/centreon/centreon_dsm_purge.log 2>&1
```

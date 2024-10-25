---
id: hosts
title: Creating hosts manually
---

To create a host manually:

1. Go to **Configuration \> Hosts \> Hosts** and then click **Add**.
2. Fill in the fields (see [below](#host-configuration-tab)), and then click **Save**.
3. [Deploy the configuration](../monitoring-servers/deploying-a-configuration.md).

## Host configuration tab

### Host basic information

* The **Name** field defines the host name that will be used by the Monitoring Engine. The following characters are not authorized: `~!$%^&|'"<>?,()=*{}` and spaces.
* The **Alias** is another name for the host, spaces and characters unauthorized in the name are allowed here. You may also use the alias to look up the host using the Name search bar.
* The **Address** field defines the IP address or DNS name of the host. The **Resolve** tests the domain name by questioning the DNS server configured on the central server. If given a DNS name, the Resolve button will also replace the text with the matching IP address.
* The **SNMP Community & Version** fields contain the name of the community and the SNMP version.
* The **Monitoring server** field indicates whether Central, a poller or a remote server will be charged with monitoring this host.
* The **Timezone** field indicates the time zone location of the host.
* The **Templates** field enables us to associate one or more host templates with this object to quickly configure it.

If multiple templates would modify the same field, the properties of the template placed above the others will be applied. 

###SCHEMA GOES HERE

This button ![image](../../assets/configuration/common/move.png#thumbnail1) enables us to change the order of host templates.
This button ![image](../../assets/configuration/common/delete.png#thumbnail1) is used to delete the host template.

* If the **Create Services linked to the Template too** field is defined as **Yes**, Centreon automatically generates
  the services according to the service templates of the host template placed above the others
  (see the *[templates chapter](../templates.md#definition)*).

### Host check options

* The **Check Command** field indicates the command used to check the availability of the host.
* The **Args** field defines the arguments given to the check command (each argument starts with ”!”).

* **Custom macros**:

For a more extensive explanation on macros, check our [dedicated article](../macros/#custom-macros)
   * The **Name** and **Value** field enable us to define the name and value of the macro.
   * The **Password** box is used to hide the value of the macro.

  To revert to the value defined by the template, click ![image](../../assets/configuration/common/undo.png#thumbnail1)
  
  To view the description of the macro, click ![image](../../assets/configuration/common/description.png#thumbnail1)

  To delete the macro, click ![image](../../assets/configuration/common/delete.png#thumbnail1)

  To change the order of the macros, click ![image](../../assets/configuration/common/move.png#thumbnail1)

### Scheduling options

* The **Check Period** field defines the time period during which active checks can performed.
* The **Max Check Attempts** field defines the number of checks to be performed before confirming the status of the
  host as not OK. When the status is confirmed, the notification process is triggered.
* The **Normal Check Interval** defines the interval in minutes between checks when the host status is OK.
* The **Retry Check Interval** defines the check interval in minutes of the Not-OK status of the host.
* The **Active Checks Enabled** and **Passive Checks Enabled** fields enable / disable the active and passive checks. Passive checks are information the monitored resource sends to Central without it having been actively requested, you cqn learn more about passive monitoring [here](../monitoring/passive-monitoring).

## Notification tab

* The **Notification Enabled** field is used to enable or disable notifications concerning the object.
* The list of **Linked contacts** indicates the contacts that will receive the notifications. These contacts must be previously configured in the **Users** section.
* The list of **Linked contacts Groups** indicates the groups of contacts that will receive the notifications. Groups mest be previously configured in the **Users** section.
  
  If the **Vertical inheritance only** option is used to determine contacts and/or groups of contacts that should be notified. When enabled on the  **Administration > Parameters > Centreon UI** page, two extra checkboxes appear:

    * If the **Contact additive inheritance** box is checked, Centreon does not overwrite the configuration of the parent host template, but adds the contacts in addition to the contacts defined in the parent template.
    * If the **Contact group additive inheritance** box is checked, Centreon does not overwrite the configuration of the parent host template, but adds the contact groups in addition to the contact groups defined in the parent template.

* The **Notification Options** define the statuses for which a notification will be sent. If no boxes are checked, you will receive notifications for all the statuses listed.
* The **Notification Interval** is expressed in minutes. It indicates the time between sending notifications when the status is Not-OK. If the value is defined as 0, the scheduler sends a single notification per status change.
  the status is Not-OK. If the value is defined as 0, the scheduler sends a single notification per status change.
* The **Notification Period** field indicates the time period during which the notifications will be enabled.
* The **First notification delay** is expressed in minutes. It refers to the time delay to be respected before sending
  the first notification when a Not-OK status is validated. Setting the value to 0 will cause notifications to be sent immediately.
* The **Recovery notification delay** is the time that must pass before a recovery notification is sent (when the host goes back to an UP state). Setting the value to 0 will cause notifications to be sent immediately.

## Relations tab

* The **Host Groups** list defines the host groups to which the host belongs. Being part of a group allows for changes to be made to a number of hosts at the same time.
* The **Host Categories** list defines the categories to which the host belongs.
* The **Parent Hosts** list enables us to define an object as a parent for this host. The parent of a host is the object between it and its monitoring host that is also the closest to the monitored object. A host is considered to have no parent host if it is on the same network segment as the host doing the monitoring without any intermediates. Leave this field blank if that is the case.
* The **Child Hosts** list allows you to designate the current host as the parent for other hosts.

## Data processing tab

* If **Obsess Over Host** is enabled, the host check feedback command will be enabled.
* The **Check Freshness** is an active check performed by the engine when a determined threshold of time has elapsed since the last passive check of the object.
* The **Freshness Threshold** is expressed in seconds. If, during this period, no host status change request (passive command) is received, the active check command is executed. A threshold will be determined automatically if the field is left blank and the check is enabled.
* The **Flap Detection Enabled** field allows us to enable or disable the detection flapping in the statuses (status
  value changing too often in a given period).
* The **Low Flap Threshold** and **High Flap Threshold** fields define the high and low thresholds for the detection of
  flapping as a percentage of status change.
* The **Retain Status Information** and **Retain Non Status Information** fields indicate if the information concerning
  the status is saved after each time the check command is repeated.
* The **Stalking Options** field defines the options to be recorded if **Retain Information** is enabled.
* The **Event Handler Enabled** field allows us to enable or disable the event handler.
* The **Event Handler** field defines the command to be executed if the event handler is enabled.
* The **Args** field defines the arguments of the events handler command.

## Host Extended Infos tab

### Monitoring engine

* The **Note URL** clickable URL that will appear in the **Notes** column on the **Resource Status** screen (the **Notes** column must be enabled for this).
* The **Note** field allows us to add optional information concerning the host visible in the Resource Status screen (the **Notes** column must be enabled for this).
* The **Action URL** field defines a URL normally used for giving information on actions on the host (maintenance, etc.).
* The **Icon** field indicates the icon used for the host, it can be seen in a variety of places. A 40x40 pixels format is recommended.
* The **Alt Icon** is an optional string shown when the **Icon** cannot be displayed.
* The **Host severity** field indicates the severity level of the host. This is a special type of category that also allows you to sort the Resource Status by severity level.
* The **Status Map Image** field defines the logo for the Centreon Map module.
* The **Geographic coordinates** field defines the geographical coordinates used by the Centreon MAP module to position the resource on a map.
  Define "Latitude,Longitude"; for example, the set of coordinates for Paris is "48.51,2.20"

The **2d Coords** and **3d Coords** fields are obsolete and have no impact on the host.

### Access groups

* The **ACL Resource Groups** (only displayed for a non-administrator) is used to link this host to a hostgroup in order
  to view it (see the *[Access Control Lists](../../administration/access-control-lists.md)* chapter).

### Additional Information

* **Enable/disable resource** determines whether or not the host and its services must be monitored. If the host is disabled, it does not appear on the Resources Status page.
* The **Comments** field can be used to add a comment concerning the host.


> Remember to [Deploy the configuration](../monitoring-servers/deploying-a-configuration.md) for your changes to be taken into account.

---
id: hosts
title: Creating hosts manually
---

To create a host manually:

1. Go to **Configuration \> Hosts \> Hosts** and then click **Add**.
2. Fill in the fields (see [below](#host-configuration-tab)), then click on **Save**.
3. [Deploy the configuration](../monitoring-servers/deploying-a-configuration.md).

## Host configuration tab

### Host basic information

* The **Name** field defines the host name that will be used by the Monitoring Engine. The following characters are not authorized: `~!$%^&|'"<>?,()=*{}` and spaces.
* The **Alias** field shows the alias of the host.
* The **Address** field defines IP address or DNS name of the host. The **Resolve** button enables us to
  resolve the domain name by questioning the DNS server configured on the central server.
* The **SNMP Community & Version** fields contain the name of the community and the SNMP version.
* The **Monitoring server** field indicates which poller server is charged with monitoring this host.
* The **Timezone** field indicates the timezone location of the monitored hosts.
* The **Templates** field enables us to associated one or more templates of hosts with this object.

In case of conflicts of settings present on multiple templates, the host template above overwrites the identical properties
defined in host templates below.

This button enables us to change the order of host templates ![image](../../assets/configuration/common/move.png#thumbnail1)
This button serves to delete the host template ![image](../../assets/configuration/common/delete.png#thumbnail1)

* If the **Create Services linked to the Template too** field is defined as **Yes**, Centreon automatically generates
  the services based their self on the service templates linked to the host templates defined above
  (see the *[templates chapter](../templates.md#definition)*).

### Host check options

* The **Check Command** field indicates the command use to check the availability of the host.
* The **Args** field defines the arguments given to the check command (each argument starts with a ”!”).

* **Custom macros**:

   * The **Name** and **Value** field enable us to define the name and value of the macro.
   * The **Password** box enables the value of the macro to be hidden.

  To reinitialize to the default value (defined in template) click on ![image](../../assets/configuration/common/undo.png#thumbnail1)
  
  To view the description of the macro, click on ![image](../../assets/configuration/common/description.png#thumbnail1)

  To delete the macro, click on ![image](../../assets/configuration/common/delete.png#thumbnail1)

  To change the order of the macros, click on ![image](../../assets/configuration/common/move.png#thumbnail1)

### Scheduling options

* The **Check Period** field defines the time period during which the scheduler checks the status of the object.
* The **Max Check Attempts** field defines the number of checks to be performed before confirming the status of the
  host: when the status is confirmed the notification process is triggered.
* The **Normal Check Interval** is expressed in minutes. It defined the interval between checks when the host status is OK.
* The **Retry Check Interval** is expressed in minutes. It defined the check interval of the Not-OK status of the host.
* The **Active Checks Enabled** and **Passive Checks Enabled** fields enable / disable the active and passive checks.

## Notification tab

* The **Notification Enabled** field enables us to enable or disable the notifications concerning the object.
* The list of **Linked contacts** indicates the contacts which will receive the notifications.
* The list of **Linked contacts Groups** indicates the groups of contacts which will receive the notifications.
  
  If, on page **Administration > Parameters > Centreon UI**, the **Vertical inheritance only** option is enabled, two extra checkboxes appear:

    * If the **Contact additive inheritance** box is checked, Centreon does not overwrite the configuration of the parent host template but adds the contacts in addition to the contacts defined in the parent template.
    * If the **Contact group additive inheritance** box is checked, Centreon does not overwrite the configuration of the parent host template but adds the contact groups in addition to the contact groups defined in the parent template.

* The **Notification Options** define the statuses for which a notification will be sent.
* The **Notification Interval** is expressed in minutes. It indicates the time between sending each notifications when
  the status is Not-OK. If the value is defined as 0 the scheduler sends a single notification per status change.
* The **Notification Period** field indicates the time period during which the notifications will be enabled.
* The **First notification delay** is expressed in minutes. It refers to the time delay to be respected before sending
  the first notification when a Not-OK status is validated.
* The **Recovery notification delay** is the time that must pass before a recovery notification is sent (when the host goes back to an UP state).

## Relations tab

* The **Host Groups** list defined the host groups to which the host belongs.
* The **Host Categories** list defined the categories to which the host belongs.
* The **Parent Hosts** list enables us to define the physical family relationships between objects.
* The **Child Hosts** list enables us to define the physical family relationships between objects.

## Data processing tab

* If **Obsess Over Host** is enabled, the host check feedback command will be enabled.
* The **Check Freshness** field allows us to enable or disable the result freshness check.
* The **Freshness Threshold** is expressed in seconds. if during this period no host status change request (passive
  command) is received the active check command is executed.
* The **Flap Detection Enabled** field allows us to enable or disable the detection flapping in the statuses (status
  value changing too often on a given period).
* The **Low Flap Threshold** and **High Flap Threshold** fields define the high and low thresholds for the detection of
  flapping in percentage of status change.
* The **Retain Status Information** and **Retain Non Status Information** fields indicate if the information concerning
  the status is saved after every time the check command is repeated.
* The **Stalking Options** field defined the options to be recorded if retention is enabled.
* The **Event Handler Enabled** field allows us to enable or disable the events handler.
* The **Event Handler** field defined the command to be executed if the event handler is enabled.
* The **Args** field defined the arguments of the events handler command.

## Host Extended Infos tab

### Monitoring engine

* The **Note URL** field defined a URL that can be used to give more information on the host.
* The **Note** field permits us to add optional notes concerning the host.
* The **Action URL** field defined a URL normally use for giving information on actions on the host (maintenance, etc.).
* The **Icon** field indicates the icon use for the host.
* The **Alt Icon** field is the text use if the icon cannot be Display.
* The **Host severity** field indicates the severity level of the host.
* The **Status Map Image** field defined the logo for Centreon Map module.
* The **Geographic coordinates** field defines geographical coordinates used by the Centreon MAP module to position the resource on a map.
  Define "Latitude,Longitude", for example for Paris coordinates set "48.51,2.20"
* **Enable/disable resource**: This setting determines whether the host and its services must be monitored or not. If the host is disabled, it doesn't appear on the **Resources Status** page.

The fields presented below are obsolete:

* **2d Coords**
* **3d Coords**

### Access groups

* The **ACL Resource Groups** (only displayed for non administrator) allows to link this host to an hostgroup in order
  to visualize it (see *[Access Control Lists](../../administration/access-control-lists.md)* chapter).

### Additional Information

* The **Status** field allows us to enable or disable the host.
* The **Comments** field can be used to add a comment concerning the host.

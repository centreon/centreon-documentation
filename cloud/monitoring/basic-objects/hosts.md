---
id: hosts
title: Creating hosts manually
---

To create a host manually:

1. Go to **Configuration \> Hosts \> Hosts** and then click **Add**.
2. Fill in the fields (see below), and then click **Save**.
3. [Deploy the configuration](../monitoring-servers/deploying-a-configuration.md).

## Configuration of the host

### General information

* The **Name** field defines the host name that will be used by the Monitoring Engine. The following characters are not authorized: `~!$%^&|'"<>?,()=*{}` and spaces.
* The **Alias** field shows the alias of the host.
* The **Address** field defines the IP address or DNS name of the host. The **Resolve** button enables us to
  resolve the domain name by questioning the DNS server configured on the SaaS platform.
* The **Templates** field enables us to associate one or more host templates with this object.

  In case of conflicts between settings present on multiple templates, the host template above overwrites the identical properties
defined in the host templates below.

  This button enables us to change the order of host templates ![image](../../assets/configuration/common/move.png#thumbnail1)
  This button is used to delete the host template ![image](../../assets/configuration/common/delete.png#thumbnail1)

  The services associated with the host template will be created automatically.

* **Enable/disable resource**: This setting determines whether or not the host and its services must be monitored. If the host is disabled, it does not appear on the **Resources Status** page.

### Monitoring settings

* The **Monitoring server** field indicates which poller will monitor this host.
* The **SNMP Community & Version** fields contain the name of the community and the SNMP version.
* **Custom macros**:

   * The **Name** and **Value** field enable us to define the name and value of the macro.
   * The **Password** box is used to hide the value of the macro.

  To reinitialize to the default value (defined in the template), click ![image](../../assets/configuration/common/undo.png#thumbnail1)
  
  To view the description of the macro, click ![image](../../assets/configuration/common/description.png#thumbnail1)

  To delete the macro, click ![image](../../assets/configuration/common/delete.png#thumbnail1)

  To change the order of the macros, click ![image](../../assets/configuration/common/move.png#thumbnail1)

* The **Check Period** field defines the [time period](../basic-objects/timeperiods.md) during which the scheduler checks the status of the object.
* The **Timezone** field indicates the location of the monitored hosts. The check period for this host will be based on this timezone.

### Scheduling options

* The **Max Check Attempts** field defines the number of checks to be performed before confirming the status of the
  host. When the status is confirmed, the notification process is triggered.
* The **Normal Check Interval** is expressed in minutes. It defines the interval between checks when the host status is OK.
* The **Retry Check Interval** is expressed in minutes. It defines the check interval of the Not-OK status of the host.

### Classification

* The **Host Groups** list defines the host groups to which the host belongs.
* The **Host Categories** list defines the categories to which the host belongs.
* The **Host severity** field indicates the severity level of the host.

### Additional information

* The **Icon** field indicates the icon used for the host.
* The **Note** field permits us to add optional notes concerning the host.
* The **Note URL** field defines a URL that can be used to give more information on the host.
* The **Action URL** field defines a URL normally used for giving information on actions on the host (maintenance, etc.).
* The **Geographic coordinates** field defines the geographical coordinates used by the Centreon MAP module to position the resource on a map.
  Define "Latitude,Longitude"; for example, the set of coordinates for Paris is "48.51,2.20"

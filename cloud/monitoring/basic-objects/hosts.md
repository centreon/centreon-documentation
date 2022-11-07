---
id: hosts
title: Creating hosts manually
---

To create a host manually:

1. Go to **Configuration \> Hosts \> Hosts (simplified)** and then click **Add**.
2. Fill in the fields (see below), then click on **Save**.
3. [Deploy the configuration](../monitoring-servers/deploying-a-configuration.md).

## General information

* The **Name** field defines the host name that will be used by the Monitoring Engine.
* The **Alias** field shows the alias of the host.
* The **Address** field defines IP address or DNS name of the host. The **Resolve** button enables us to
  resolve the domain name by questioning the DNS server configured on the central server.
* The **Templates** field enables us to associated one or more templates of hosts with this object.

  In case of conflicts of settings present on multiple templates, the host template above overwrites the identical properties
defined in host templates below.

  This button enables us to change the order of host templates ![image](../../assets/configuration/common/move.png#thumbnail1)
  This button serves to delete the host template ![image](../../assets/configuration/common/delete.png#thumbnail1)

  The services associated to the host template will be created automatically.

* **Enable/disable resource**: This setting determines whether the host and its services must be monitored or not. If the host is disabled, it doesn't appear on the **Resources Status** page.

## Monitoring settings

* The **Monitoring server** field indicates which poller will monitor this host.
* The **SNMP Community & Version** fields contain the name of the community and the SNMP version.
* **Custom macros**:

   * The **Name** and **Value** field enable us to define the name and value of the macro.
   * The **Password** box enables the value of the macro to be hidden.

  To reinitialize to the default value (defined in template) click on ![image](../../assets/configuration/common/undo.png#thumbnail1)
  
  To view the description of the macro, click on ![image](../../assets/configuration/common/description.png#thumbnail1)

  To delete the macro, click on ![image](../../assets/configuration/common/delete.png#thumbnail1)

  To change the order of the macros, click on ![image](../../assets/configuration/common/move.png#thumbnail1)

* The **Check Period** field defines the time period during which the scheduler checks the status of the object.
* The **Timezone** field indicates the location of the monitored hosts. The check period for this host will be based on this timezone.

## Classification

* The **Host Groups** list defined the host groups to which the host belongs.
* The **Host Categories** list defined the categories to which the host belongs.
* The **Host severity** field indicates the severity level of the host.

## Additional information

* The **Note** field permits us to add optional notes concerning the host.
* The **Note URL** field defined a URL that can be used to give more information on the host.
* The **Action URL** field defined a URL normally use for giving information on actions on the host (maintenance, etc.).
* The **Geographic coordinates** field defines geographical coordinates used by the Centreon MAP module to position the resource on a map.
  Define "Latitude,Longitude", for example for Paris coordinates set "48.51,2.20"

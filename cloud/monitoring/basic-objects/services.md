---
id: services
title: Creating services manually
---

To create a service manually, go to **Configuration > Services > Services by host** and then click **Add**.

## Configuration of the service

### General information

* **Host**: Host to which the service is attached.
* **Name**: define the name of the service.
* **Template**: indicates the service template to which the service is linked.
* The **Enable/disable resource** field allows us to enable or disable the service.

### Monitoring settings

* **Custom Macros**: add customized macros.

   - The **macro name** and **macro value** fields allow us to define the name and value of the macro. The **Password** box
can be used to hide the value of the macro.
   - To reinitialize to the default value (defined in template) click ![image](../../assets/configuration/common/undo.png#thumbnail1)
   - To view the description of the macro, click ![image](../../assets/configuration/common/description.png#thumbnail1)
   - To delete the macro, click ![image](../../assets/configuration/common/delete.png#thumbnail1)
   - To change the order of the macros, click ![image](../../assets/configuration/common/move.png#thumbnail1)

* The **Check Period** field defines the time period during which the scheduler checks the status of the service.

### Scheduling options

* The **Max Check Attempts** field defines the number of checks to be performed before confirming the status of the service. When the status is confirmed, the notification process is triggered.
* The **Normal Check Interval** is expressed in minutes. It defines the interval between checks when the service status is OK.
* The **Retry Check Interval** is expressed in minutes. It defines the check interval of the Not-OK status of the service.

### Classification

* The **Service groups** list allows us to link the service to one or more service groups.
* **Service Categories**: Defines the category or categories to which the service belongs.
* The **Host severity** field indicates the severity level of the host.

### Additional information

* The **Icon** field indicates the icon used for the service.
* The **Note** field can be used to add optional notes concerning the service.
* The **Note URL** field defines a URL that can be used to give more information on the service.
* The **Action URL** field defines a URL normally used for giving information on actions on the service (maintenance, etc.).
* The **Geographic coordinates** field defines the geographical coordinates used by the Centreon MAP module to position the resource on a map.
  Define "Latitude,Longitude"; for example, the set of coordinates for Paris is "48.51,2.20"

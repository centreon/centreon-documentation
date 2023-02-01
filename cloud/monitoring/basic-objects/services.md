---
id: services
title: Creating services manually
---

To create a service manually, go to **Configuration > Services > Services (simplified)** and then click **Add**.

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
   - To reinitialize to the default value (defined in template) click on ![image](../../assets/configuration/common/undo.png#thumbnail1)
   - To view the description of the macro, click on ![image](../../assets/configuration/common/description.png#thumbnail1)
   - To delete the macro, click on ![image](../../assets/configuration/common/delete.png#thumbnail1)
   - To change the order of the macros, click on ![image](../../assets/configuration/common/move.png#thumbnail1)

* The **Check Period** field defined the time period during which the scheduler checks the status of the service.

### Classification

* The **Service groups** list allows us to link the service to one or more service groups.
* **Service Categories**: Defines the category(s) to which the service belongs.
* The **Service severity** field indicates the criticality level of the service.

### Monitoring engine

* The **Note** field permits us to add optional notes concerning the service.
* The **Note URL** field defines a URL that can be used to give more information on the service.
* The **Action URL** field defines a URL normally used for giving information on actions on the service (maintenance, etc.).
* The **Geographic coordinates** field defines geographical coordinates used by the Centreon MAP module to position the resource on a map.
  Define "Latitude,Longitude", for example for Paris coordinates set "48.51,2.20"

---
id: categories
title: Categories
---

Generally speaking, the categories serve either to define a criticality level for a host or a service, or to group
together technically a set of objects (services linked to the execution of a request on a MariaDB DBMS, etc.).
<!-- Good practice requires that we group hosts or services together into categories to facilitate the filtration of these
objects in [ACL]().-->
The categories are also used to define types of objects in the Centreon MAP module or to classify the objects within
sub-groups in the Centreon BI module.

### Hosts category

Go to the **Configuration > Hosts > Categories** menu and click on **Add**.

![image](../assets/configuration/08hostcategory.png)

* The **Host Category Name** and **Alias** fields contain respectively the name and the alias of the category of host.
* The **Linked hosts** list allows us to add hosts to the category.
* If a host template is added to **Linked host template** list all the hosts which inherit from this Model belong to
  this category.
* The **Severity type** box signifies that the category of hosts has a criticality level.
* The **Level** and **Icon** fields define a criticality level and an associated icon respectively.
* The **Status** and **Comment** fields allow us to enable or disable the category of host and to comment on it.

### Services category

Go to the **Configuration > Services > Categories** menu and click on **Add**.

![image](../assets/configuration/08servicecategory.png)

* The **Name** and **Description** fields define the name and the description of the category of service.
* If a service template is added to **Service Template Descriptions** list all the services which inherit from this
  template belong to this category. 
* The **Severity type** box signifies that the category of service has a criticality level.
* The **Level** and **Icon** fields define a criticality level and an associated icon respectively.
* The **Status** field allows us to enable or disable the category of services.

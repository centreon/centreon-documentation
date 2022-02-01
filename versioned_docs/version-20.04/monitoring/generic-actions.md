---
id: generic-actions
title: Generic actions
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


In the Configuration menu it is possible to perform certain “generic” actions on the various objects.

## Add / Delete

The addition of a new object is done via the **Add** instruction next to the **More actions...** menu.

To delete an object:

1. Select the object(s) that you want to delete by checking the box(s) next to its name.
2. In the **More actions...** menu click on **Delete**.

> Deletion of an object is final. If you delete an object by accident, you will need to re-create it. In the same way,
> deletion of an object automatically deletes all the objects linked to it and which cannot live without it. E.g.:
> Deletion of a host results in the deletion of all the services associated with this host.

## Duplication

### Principle

Duplication of an object enables it to be copied / cloned to be able to re-use its Attributes for the creation of a new
object. E.g.: I have 10 identical web servers to supervise:

1. I add the first web server with all the necessary Attributes
2. I duplicate this host 9 times
3. It only remains for me to change the host names and the IP addresses of each duplication to adapt it to the 9 other web servers to be monitored

Thanks to this method, it is no longer necessary to create each host individually.

### Practice

<Tabs groupId="sync">
<TabItem value="New pages" label="New pages">

To duplicate a Business Activity:

1. Select the Business Activity that you want to duplicate by checking the associated box
2. Click on the duplicate icon: ![image](../assets/configuration/common/duplicate_new.png#thumbnail1)
3. Enter the number of duplications that you want to obtain

![image](../assets/configuration/common/duplicate_objects_new.png)

4. Click on **OK**

</TabItem>
<TabItem value="Legacy pages" label="Legacy pages">

To duplicate a host:

1. Select the host that you want to duplicate
2. In the **Options** column, enter the number of duplications that you want to obtain

![image](../assets/configuration/common/01duplicate.png)

3. In the **More actions...** menu click on **Duplicate**

![image](../assets/configuration/common/01duplicateobjects.png)

</TabItem>
</Tabs>

## Massive Change

### Principle

Massive change enable us to apply a change to multiple objects.

E.g.: All the web servers previously created change SNMP communities. A massive change enables us to change this
community without it being necessary to change each sheet of each host individually.

### Practice

To perform a massive change:

1. Select the objects you want change
2. In the **More actions...** menu click on **Massive Change**

The change menu opens, there are 2 types to change:

* **Incremental**: signifies that the change will be added to the existing options
* **Replacement**: signifies that the change will overwrite the existing options

## Enable / disable

### Principle

The enabling and disenabling of objects enables us to take the object into account or not during configuration generation.
The main advantage is to be able to keep the configuration of an object without applying it.

### Practice

<Tabs groupId="sync">
<TabItem value="New pages" label="New pages">

To enable / disable an object:

1. Select the objects you want enable/disble
2. Click on icon to Disable or Enable

It is also possible to enable or disable an object via the **State** field of the object detail sheet or by using the following icons

* ![image](../assets/configuration/common/enabled_new.png#thumbnail1)
* ![image](../assets/configuration/common/disabled_new.png#thumbnail1)

</TabItem>
<TabItem value="Legacy pages" label="Legacy pages">

To enable / disable an object:

1. Select the objects you want change
2. In the **More actions...**  menu click on **Enable / disable**

It is also possible to enable or disable an object via the **Status** field of the object detail sheet or by using the following icons:

* ![image](../assets/configuration/common/enabled.png#thumbnail1)
* ![image](../assets/configuration/common/disabled.png#thumbnail1)

</TabItem>
</Tabs>

## Delete

<Tabs groupId="sync">
<TabItem value="New pages" label="New pages">

To delete an object:

1. Select the objects you want to delete
2. Click on icon to delete ![image](../assets/configuration/common/delete_new.png#thumbnail1)
3. Confirm the action

</TabItem>
<TabItem value="Legacy pages" label="Legacy pages">

To delete an object:

1. Select the objects you want to delete
2. In the **More actions...**  menu click on **Delete**
3. Confirm the action

</TabItem>
</Tabs>

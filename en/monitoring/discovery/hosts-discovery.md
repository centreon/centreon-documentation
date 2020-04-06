---
id: hosts-discovery
title: Hosts Discovery
---

> The discovery rules are provided  from installation of Plugin Packs (MS Azure, Amazon Web Services, VMware, etc.). To
know the complete list, please go to the *[Plugin Packs catalog](../../integrations/plugin-packs/init-plugin-packs.html)*.

Discovering new resources is done in two steps:

1. *[Start a discovery task](#start-a-discovery-task)*
2. *[Analyze the result of a discovery task](analyze-the-result-of-a-discovery-task)*

## Start a discovery task

Go to **Configuration > Hosts > Discovery** and click on **Add**

Select the discovery rule and click on the **Next** button:

![image](assets/configuration/autodisco/manual_host_scan_select_rule.png)

Enter a name to save the settings to *[reuse](#reload-a-discovery-task)* them:

![image](assets/configuration/autodisco/manual_host_scan_define_credential_1.png)

Enter remote API access settings, then click on the **Next** button:

![image](assets/configuration/autodisco/manual_host_scan_define_credential_2.png)

A discovery task had been created, you go back to the listing of discovery tasks:

![image](assets/configuration/autodisco/manual_host_scan_list_tasks.png)

Wait for the data recovery time.

## Analyze the result of a discovery task

Go to the **Configuration > Hosts > Discovery** menu to access to the list of discovery tasks:

![image](assets/configuration/autodisco/manual_host_scan_list_tasks_2.png)

The legend is:

![image](assets/configuration/autodisco/legend_task_status.png)

* Pending task
* Failed task
* Completed task & ready for analysis

Click on the name of the task to discover the result:

![image](assets/configuration/autodisco/items_list.png)

Available actions are:

* Filter by name of resources
* Select resources one by one or all visible resources
* Modify the selected monitoring template
* Delete the selection of all resources
* Back to the listing of tasks

Once the resources are selected, you can:

![image](assets/configuration/autodisco/save.png)

* **Save**: import resources in monitoring configuration.
* **Save & monitor**: import resources in monitoring configuration and start the monitoring of them.

You back to the list of discovery tasks.

Regarding your choice, go to **Configuration > Hosts > Hosts** or **Monitoring > Status Details > Services** menu to
visualize the result:

![image](assets/configuration/autodisco/host_conf_listing.png)

## Reload a discovery task

During the first discovery task, the settings had been stored. So, it is possible to select them to create a new
discovery task:

![image](assets/configuration/autodisco/reload_task.png)

## FAQ

If any Plugin Packs containing discovery rules have been installed
an error message prompts you to perform this action:

![image](assets/configuration/autodisco/manual_host_scan_error_pp.png)

If a task is in failed status, place your cursor on the icon to know the reason:

![image](assets/configuration/autodisco/manual_host_scan_error_missing_plugin.png)

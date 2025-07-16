---
id: preparing-data
title: Preparing data for report generation
---

## Making your resources available to MBI

For hosts and services availability and performance reports template, the resources you want to see appear in reports need to be organized in [host groups](../monitoring/groups.md#creating-a-host-group), [host categories](../monitoring/categories.md#hosts-category) and [service categories](../monitoring/categories.md#services-category). 

For business activities and business views availability reports template, the resources you want to see appear in reports need to be organized in [businessactivities], [businessviews]

Notes:
- Be sure than all desired resources are monitored by Centreon (pollers)
- Be sure than all monitored resources return status and metrics

## Configuring MBI

Configuration of the ETL should be done shortly after installation and is normally done once. It is not necessary to change the configurations it for different types of reports and should only be done if you are [havinng issues](troubleshooting.md). 

Go to **Reporting > Monitoring Business Intelligence > General options**

<!-- ### Scheduler options tab

Fill in the CBIS server IP address -->

### ETL options tab

Select the perimeters for the reports, the time periods and the service categories (disk, ping, memory, traffic). This is also where you configure how precise you want the data statistics to be (I.E. per months, days, hours...)

By default, ELT is configured to compute availability and performance for all existings dimensions: hostgroups, hostcategories and servicecategories. If some dimensions are not mandatory, you can uncheck "All group dimensions" to select only required dimensions.

There is consistency between supervision and reports, the hostgroups, hostcategories and servicecategories conditions the visibility of the data in the report. So if you need to generate report on any resource, you have to be sure than :
- this resource configuration is up to date, 
- this resource is not empty, 
- this resource is yet configured for ETL compute, 
- very important: this resource is yet monitored by Centreon. 

Notes:
- It is possible to generate a report job with a scope without data if there is mismatch configuration or there isn't well dimension configuration 
- The ETL is static; it does not automatically detect configuration changes on Centreon outside of its regular checks (scheduled for 4:30 a.m. by default). The user who updates their data must launch a rebuild of the ETL for the data to be taken into account immediately. Otherwise, we must wait until the next day for the latest changes to be taken into account.
- If there is less historical data than 1 month, it's possible to get gaps in the generated report

<!-- rappeler de mettre à jour les host groups, host categories et service categoires pour que les données soient prises en compte dans les rapports. Ces trois types de ressources sont essentiels pour le fonctionnement de MBI et on doit rappeler de les mettre à jour -->

<!-- parler de la conf de L'ETL et de son rebuild: l'ETL de mbi est statique, il ne détecte pas automatiquement les changements de configuration sur Centreon en dehors de ses checks réguliers (programmés pour 4h du matin par defaut). L'utilisateur qui met à jour ses données doit lancer un rebuild de l'ETL pour que les données soient prises en compte immédiatement. Autrement on doit attendre le lendemain pour que les derniers changements soient pris en compte. -->

<!-- avertir sur les trous dans les données qui empêchent la génération des rapports. -->
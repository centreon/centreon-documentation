---
id: preparing-data
title: Preparing data for report generation
---

## Making your resources available to MBI

The resources you want to see appear in reports need to be organized in [host groups](../monitoring/groups.md#creating-a-host-group), [host categories](../monitoring/categories.md#hosts-category) and [service categories](../monitoring/categories.md#services-category). 

When you [install MBI](./installation.md), a service user called CBIS is automatically created. This user is created as an admin by default so that it has access to everything and can generate reports on any resource. We recommend you double-check that the admin field is properly checked in the user's **Centreon Authentication**

## Configuring MBI

Configuration of the ETL should be done shortly after installation and is normally done once. It is not necessary to change the configurations it for different types of reports and should only be done if you are [havinng issues](troubleshooting.md). 

Go to **Reporting > Monitoring Business Intelligence > General options**

### Scheduler options tab

Fill in the CBIS server IP address

### ETL options tab

Select the perimeters for the reports. This includes the time periods and the service categories (disk, ping, memory, traffic). This is also where you configure how precise you want the data statistics to be (I.E. per months, days, hours...)

cohérence entre supervision et rapports, les HG/HC/SC conditionnent les données visibles dans les rapports

rappeler de mettre à jour les host groups, host categories et service categoires pour que les données soient prises en compte dans les rapports. Ces trois types de ressources sont essentiels pour le fonctionnement de MBI et on doit rappeler de les mettre à jour

il est possible de créer un job avec un périmètre sans données sans le savoir.

parler de la conf de L'ETL et de son rebuild: l'ETL de mbi est statique, il ne détecte pas automatiquement les changements de configuration sur Centreon en dehors de ses checks réguliers (programmés pour 4h30 du matin par defaut). L'utilisateur qui met à jour ses données doit lancer un rebuild de l'ETL pour que les données soient prises en compte immédiatement. Autrement on doit attendre le lendemain pour que les derniers changements soient pris en compte.

avertir sur les trous dans les données qui empêchent la génération des rapports.
---
id: hosts-discovery
title: Découverte des hôtes
---

> Les règles de découverte sont apportées lors de l’installation de Plugin Packs (MS Azure, Amazon Web Services,
> VMware, etc.). Pour connaître la liste complète, rendez-vous au
> [catalogue des Plugin Packs.](../../integrations/plugin-packs/init-plugin-packs).

La découverte de nouvelles ressources s’effectue en deux étapes :

1. [Lancer une tâche de découverte](#lancer-une-tâche-de-découverte)
2. [Analyser le résultat d’une tâche de découverte](#analyser-le-résultat-dune-tâche-de-découverte)

## Lancer une tâche de découverte

Rendez-vous dans le menu **Configuration > Hosts > Discovery** et cliquez sur **Add**

Sélectionnez la règle de découverte, et cliquez sur **Next** :

![image](assets/configuration/autodisco/manual_host_scan_select_rule.png)

Saisissez un nom pour la sauvegarde des paramètres afin de les [réutiliser](#relancer-une-tâche-de-découverte) par la
suite :

![image](assets/configuration/autodisco/manual_host_scan_define_credential_1.png)

Saisissez les paramètres d’accès à l’API distante, puis cliquez sur **Next** :

![image](assets/configuration/autodisco/manual_host_scan_define_credential_2.png)

Une tâche de découverte a été créée, vous revenez à la liste des tâches de découverte :

![image](assets/configuration/autodisco/manual_host_scan_list_tasks.png)

Patientez le temps de la récupération des données.

## Analyser le résultat d’une tâche de découverte

REndez-vous dans le menu **Configuration > Hosts > Discovery** , vous accédez à la liste des tâches de découverte
exécutées :

![image](assets/configuration/autodisco/manual_host_scan_list_tasks_2.png)

La légende est la suivante :

![image](assets/configuration/autodisco/legend_task_status.png)

* Tâche non exécutée
* Tâche échouée
* Tâche terminée et prête à être analysée

Cliquez sur le nom de la tâche terminée et que vous souhaitez analyser, la liste des objets découverts est affichée :

![image](assets/configuration/autodisco/items_list.png)

Les actions disponibles sont :

* Filtrer sur le nom des ressources
* Sélectionner les ressources une à une ou toutes les ressources visibles
* Modifier le modèle de supervision proposé
* Supprimer la sélection de toutes les ressources
* Revenir à la liste des résultats de découverte
* Une fois les ressources sélectionnées, il est possible de :

![image](assets/configuration/autodisco/save.png)

* **Save** : enregistrer les ressources dans la configuration de la supervision.
* **Save & monitor** : enregistrer les ressources dans la configuration de la supervision et démarrer la supervision
  de ces dernières.

Vous revenez ensuite à la liste des résultats de découverte.

Suivant votre choix, rendez vous dans le menu **Configuration > Hosts > Hosts** or **Monitoring > Status Details >
Services**  pour visualiser le résultat :

![image](assets/configuration/autodisco/host_conf_listing.png)

## Relancer une tâche de découverte

Lors de la création de la première tâche de découverte, les paramètres ont été sauvegardé. Ainsi il est possible de
sélectionner ces derniers pour créer une nouvelle tâche de découverte :

![image](assets/configuration/autodisco/reload_task.png)

## FAQ

Si aucun Plugin Packs contenant des règles de découverte n’a été installé, un message d’erreur vous invite à réaliser
cette opération :

![image](assets/configuration/autodisco/manual_host_scan_error_pp.png)

Lors de l’échec d’exécution d’une tâche, placez votre curseur sur l’icône d’échec pour en connaître la raison :

![image](assets/configuration/autodisco/manual_host_scan_error_missing_plugin.png)

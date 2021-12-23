---
id: categories
title: Catégories
---

D’une manière générale, les catégories servent soit à définir un niveau de criticité pour un hôte ou un service, soit à
regrouper techniquement un ensemble d’objets (services liés à une exécution de requête sur un SGBD MariaDB, ...). La
bonne pratique demande à ce qu’on regroupe des hôtes ou des services au sein de catégories pour pouvoir faciliter le
filtrage de ces objets au sein [d’ACL](../administration/access-control-lists). Les catégories sont également utilisées pour définir des types d’objets au sein
du module [Centreon MAP](../graph-views/introduction) ou pour classer les objets au sein de sous-groupes dans le module [Centreon BI](../reporting/introduction).

Il est possible de créer des catégories [d'hôtes](#catégories-dhôtes) ou de [services](#catégories-de-services).

## Catégories d’hôtes

Rendez-vous dans le menu **Configuration > Hosts > Categories** et cliquez sur **Add**

![image](../assets/configuration/08hostcategory.png)

* Les champs **Host Category Name** et **Alias** contiennent respectivement le nom et l’alias de la catégorie d’hôte.
* La liste **Linked hosts** permet d’ajouter des hôtes à la catégorie.
* Si un modèle d’hôte est ajouté à **Linked host template** alors tous les hôtes qui héritent de ce modèle appartiennent
  à cette catégorie.
* La case  **Severity type** signifie que la catégorie d’hôtes à un niveau de criticité.
* Les champs **Level** et **Icon** définissent respectivement un niveau de criticité et une icône associée.
* Les champs **Status** et **Comment** permettent d’activer ou de désactiver la catégorie d’hôte et de commenter celle-ci.

## Catégories de services

Rendez-vous dans le menu **Configuration > Services > Categories** et cliquez sur **Add**

![image](../assets/configuration/08servicecategory.png)

* Les champs **Name** et **Description** définissent le nom et la description de la catégorie de service.
* Si un modèle de service appartient à **Service Template Descriptions** alors tous les services appartenant à ce modèle
  de services font partie de cette catégorie.
* La case **Severity type** ignifie que la catégorie de service à un niveau de criticité.
* Les champs **Level** et **Icon** définissent respectivement un niveau de criticité et une icône associée.
* Le champ **Status** permet d’activer ou de désactiver la catégorie de services.

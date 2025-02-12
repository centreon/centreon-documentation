---
id: categories
title: Catégories
---

### Les catégories

D’une manière générale, les catégories servent soit à définir un niveau de criticité pour un hôte ou un service, soit à
regrouper techniquement un ensemble d’objets (services liés à une exécution de requête sur un SGBD MariaDB, ...). La
bonne pratique demande à ce qu’on regroupe des hôtes ou des services au sein de catégories pour pouvoir faciliter le
filtrage de ces objets au sein d’ACL. Les catégories sont également utilisées pour définir des types d’objets au sein
du module Centreon MAP ou pour classer les objets au sein de sous-groupes dans le module Centreon BI.

### Les catégories d’hôtes

Rendez-vous dans le menu **Configuration > Hôtes > Catégories** et cliquez sur **Ajouter**.

![image](../assets/configuration/08hostcategory.png)

* Les champs **Nom** et **Alias** contiennent respectivement le nom et l’alias de la catégorie d’hôte.
* La liste **Hôtes liés** permet d’ajouter des hôtes à la catégorie.
* Si un modèle d’hôte est ajouté à **Lié au modèle d'hôte** alors tous les hôtes qui héritent de ce modèle appartiennent
  à cette catégorie.
* La case  **Type de criticité** signifie que la catégorie d’hôtes à un niveau de criticité.
* Les champs **Niveau** et **Icône** définissent respectivement un niveau de criticité et une icône associée.
* Les champs **Statut** et **Commentaires** permettent d’activer ou de désactiver la catégorie d’hôte et de commenter celle-ci.

### Les catégories de services

Rendez-vous dans le menu **Configuration > Services > Catégories** et cliquez sur **Ajouter**

![image](../assets/configuration/08servicecategory.png)

* Les champs **Nom** et **Description** définissent le nom et la description de la catégorie de service.
* Si un modèle de service appartient à **Service Template Descriptions** alors tous les services appartenant à ce modèle
  de services font partie de cette catégorie.
* La case **Type de criticité** ignifie que la catégorie de service à un niveau de criticité.
* Les champs **Niveau** et **Icône** définissent respectivement un niveau de criticité et une icône associée.
* Le champ **Statut** permet d’activer ou de désactiver la catégorie de services.

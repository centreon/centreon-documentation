---
id: groups
title: Groupes
---

Il est possible de regrouper des hôtes ou des services au sein de groupes.

D’une manière générale, les groupes sont des conteneurs permettant de regrouper un ensemble d’objets possédant une
propriété commune :

* Même identité matérielle (serveurs Dell, HP, IBM, ...), identité logique (équipements réseau) ou identité géographique
  (Europe, Asie, Afrique, Amérique du nord, ...)
* Appartenance à une même application (application CMS, ...) ou à un même secteur d’activité (Gestion de la paie, ...)

Les groupes d’hôtes et de services sont utilisés pour :

* La configuration des [ACLs](../administration/access-control-lists.md) afin de lier un ensemble de ressources à un type de profil
* Permettre de visualiser les rapports de disponibilité par groupe. Générer un rapport de disponibilité des ressources
  "Agence Paris".
* Permettre de visualiser le statut d’un ensemble d’objets en sélectionnant dans les filtres de recherche un groupe d’objets
* Rechercher rapidement un à plusieurs graphiques de performances en parcourant l’arbre des objets par groupes puis par ressource
* D’une manière générale, on cherche à regrouper les hôtes par niveau fonctionnel. Exemple : Hôtes DELL, HP ou encore
  Hôtes Linux, Windows... On cherche également à regrouper les services par applications métiers. Exemple : application de
  gestion de la paie, application ERP, ...

> Pour les hôtes appartenant à un groupe d’hôtes, la rétention des fichiers RRD peut être définie au sein du groupe
> d’hôtes auquel il appartient. Cette définition vient surcharger la définition globale. Dans le cas où un même hôte
> appartient à plusieurs groupes possédant chacun une définition de rétention, la valeur la plus élevée sera
> sélectionnée pour l’hôte.

## Créer un groupes d’hôtes

Rendez-vous dans le menu **Configuration > Hôtes > Groupes d'hôtes** et cliquez sur **Ajouter**.

* Les champs **Nom** et **Alias** regroupent le nom et l’alias du groupe d’hôtes.
* La liste **Membres** permet d’ajouter des hôtes au sein du nouveau groupe d’hôtes.
* Le champ **Notes** permet d’ajouter des notes optionnelles concernant le groupe d’hôtes.
* Le champ **URL** définit une URL qui peut être utilisée pour donner davantage d’informations sur le groupe d’hôtes.
* Le champ **URL d'action** définit une URL habituellement utilisée pour donner des informations d’actions sur le groupe
  d’hôtes (maintenance...).
* Le champ **Icône** indique l’icône à utiliser pour le groupe d’hôtes.
* Le champ **Icône pour la carte** est l’icône utilisée pour la cartographie.
* Le champ **Coordonnées géographiques** définit les coordonnées géographiques utilisées par le module Centreon Map pour positionner
  l'élément sur la carte. Définissez "Latitude, Longitude", par exemple pour le jeu de coordonnées de Paris "48.51,2.20"
* Le champ **Rétention des fichiers RRD** est exprimé en jours, il permet de définir la durée de rétention des services appartenant
  à ce groupe d’hôtes au sein de la base de données RRD. Si cette valeur est vide, la valeur sera celle par défaut
  définie dans le menu **Administration > Options > CentStorage**.
* Les champs **Activer/désactiver la ressource** et **Commentaires** permettent d’activer ou de désactiver le groupe d’hôtes et de commenter celui-ci.

## Créer un groupe de services

Rendez-vous dans le menu **Configuration > Services > Groupes de services** et cliquez sur **Ajouter**.

* Les champs **Nom** et **Description** regroupent le nom et la description du groupe de services.
* La liste **Services d'hôte liés** permet de choisir les différents services qui feront partie de ce groupe.
* La liste **Services liés au groupe d'hôte** permet de choisir les services liés à un groupe d’hôtes qui feront partie de
  ce groupe.
* Si un modèle de service appartient à la liste  **Modèles de service liés** alors tous les services qui héritent de
  ce modèle appartiennent à ce groupe.
* Les champs  **Statut** et **Commentaires** permettent d’activer ou de désactiver le groupe de services et de commenter
  celui-ci.

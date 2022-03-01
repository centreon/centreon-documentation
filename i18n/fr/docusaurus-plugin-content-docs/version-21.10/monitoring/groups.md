---
id: groups
title: Groupes
---

## Description

Au sein de Centreon, il est possible de regrouper un ou plusieurs objets au sein de différents groupes :

* Les groupes d'hôtes
* Les groupes de services
* Les groupes de contacts

D’une manière générale, les groupes sont des conteneurs permettant de regrouper un ensemble d’objets possédant une
propriété commune :

* Même identité matérielle (serveurs Dell, HP, IBM, ...), identité logique (équipements réseau) ou identité géographique
  (Europe, Asie, Afrique, Amérique du nord, ...)
* Appartenance à une même application (application CMS, ...) ou à un même secteur d’activité (Gestion de la paie, ...)

### Les groupes d’hôtes et de services

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

### Les groupes de contacts

Les groupes de contacts sont utilisés pour pouvoir notifier des contacts :

* Lors de la définition d’un hôte ou d’un service
* Lors de la définition d’une escalade de notifications

De plus, les groupes de contacts sont également utilisés lors de la définition d’un [groupe d’accès](../administration/access-control-lists.md#créer-un-groupe-daccès).

Par conséquent, il est nécessaire de regrouper les contacts d’une manière logique. La plupart du temps, ils sont regroupés
suivant leurs rôles au sein du système d’information. Exemple : DSI, Administrateurs Windows, Administrateurs Linux,
Responsable de l’application de gestion de la paie...

## Créer un groupes d’hôtes

Rendez-vous dans le menu **Configuration > Hosts > Host Groups** et cliquez sur **Add**.

![image](../assets/configuration/07hostgroup.png)

* Les champs **Host Group Name** et **Alias** regroupent le nom et l’alias du groupe d’hôtes.
* La liste **Linked Hosts** permet d’ajouter des hôtes au sein du nouveau groupe d’hôtes.
* Le champ **Notes** permet d’ajouter des notes optionnelles concernant le groupe d’hôtes.
* Le champ **Notes URL** définit une URL qui peut être utilisée pour donner davantage d’informations sur le groupe d’hôtes.
* Le champ **Action URL** définit une URL habituellement utilisée pour donner des informations d’actions sur le groupe
  d’hôtes (maintenance...).
* Le champ **Icon** indique l’icône à utiliser pour le groupe d’hôtes.
* Le champ **Map Icon** est l’icône utilisée pour la cartographie.
* Le champ **RRD retention** est exprimé en jours, il permet de définir la durée de rétention des services appartenant
  à ce groupe d’hôtes au sein de la base de données RRD. Si cette valeur est vide, la valeur sera celle par défaut
  définie dans le menu **Administration > Options > CentStorage**.
* Les champs **Status** et **Comments** permettent d’activer ou de désactiver le groupe d’hôtes et de commenter celui-ci.

## Créer un groupe de services

Rendez-vous dans le menu **Configuration > Services > Service Groups** et cliquez sur **Add**.

![image](../assets/configuration/07servicegroup.png)

* Les champs **Service Group Name** et **Description** regroupent le nom et la description du groupe de services.
* La liste **Linked Host Services** permet de choisir les différents services qui feront partie de ce groupe.
* La liste **Linked Host Group Services** permet de choisir les services liés à un groupe d’hôtes qui feront partie de
  ce groupe.
* Si un modèle de service appartient à la liste  **Linked Service Templates** alors tous les services qui héritent de
  ce modèle appartiennent à ce groupe.
* Les champs  **Status** et **Comments** permettent d’activer ou de désactiver le groupe de services et de commenter
  celui-ci.

## Créer un groupe de contacts

Rendez-vous dans le menu **Configuration > Users > Contact Groups** et cliquez sur **Add**.

![image](../assets/configuration/07contactgroup.png)

* Les champs **Contact Group Name** et **Alias** éfinissent le nom et la description du groupe de contacts.
* La liste **Linked Contacts** permet d’ajouter les contacts au groupe de contacts.
* Les champs **Status** et **Comment** permettent d’activer ou de désactiver le groupe de contacts et de commenter
  celui-ci.


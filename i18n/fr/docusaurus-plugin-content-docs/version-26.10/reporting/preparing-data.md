---
id: preparing-data
title: Préparer les données pour pouvoir générer des rapports
description: Préparer hôtes, catégories et périodes temporelles avant de générer des rapports MBI
---

## Mettre vos ressources à la disposition de MBI

Pour les rapports sur la disponibilité et les performances des hôtes/services, les ressources que vous souhaitez voir apparaître dans les rapports doivent être organisées en [groupes d'hôtes](../monitoring/groups.md#créer-un-groupes-dhôtes), [catégories d'hôtes](../monitoring/categories.md#catégories-dhôtes) et [catégories de services](../monitoring/categories.md#catégories-de-services).

- Chaque hôte que vous souhaitez voir apparaître dans les rapports doit appartenir à au moins un [groupe d'hôtes](../monitoring/groups.md#créer-un-groupes-dhôtes) et une [catégorie d'hôtes](../monitoring/categories.md#catégories-dhôtes).
- Chaque service que vous souhaitez voir apparaître dans les rapports doit appartenir à au moins une [catégorie de services](../monitoring/categories.md#catégories-de-services).

La meilleure façon de lier les hôtes aux catégories d'hôtes et les services aux catégories de services est d'utiliser les champs **Modèle d'hôte lié/Modèle de service lié** dans le formulaire de création de catégorie. Cela réduira la maintenance, car tous les futurs hôtes héritant du modèle seront automatiquement ajoutés à la catégorie (et vous n'aurez pas à les ajouter manuellement un par un au fur et à mesure que vous les créez).

* Si le rapport que vous souhaitez générer ne concerne qu'une seule ressource, vous devez quand même créer un groupe/une catégorie contenant uniquement cette ressource.
* Assurez-vous que toutes les ressources supervisées renvoient un statut (pour les rapports de disponibilité) et des métriques (pour les rapports de performance).

## Créer les périodes temporelles dont vous avez besoin

Chaque [tâche](concepts.md#tâches) utilise une [période](../monitoring/basic-objects/timeperiods.md) comme paramètre : **24x7**, **workhours**, **non-workhours**, etc. Seules les données contenues dans les périodes sélectionnées seront incluses dans le rapport.

Créez toutes les périodes personnalisées dont vous avez besoin avant de commencer à configurer les rapports.

## Définir le périmètre de données pour MBI

Seules les [données compilées par l'ETL](how-mbi-works.md#phase-2--lancement-de-letl-les-données-sont-copiées-sur-mbi-puis-agrégées) peuvent être utilisées dans les rapports.
Pour des raisons de performance, il est recommandé de limiter le périmètre de données pour MBI à ce que vous souhaitez voir dans les rapports, car de grandes quantités de données prennent plus de temps à traiter et occupent de l'espace de stockage.

Idéalement, cela a été fait dans le cadre du processus d'installation : voir [Définir les données qui seront utilisées par MBI](../reporting/installation.md#définir-les-données-qui-seront-utilisées-par-mbi). Si vous ne l'avez pas encore fait, allez dans **Rapports > Monitoring Business Intelligence > General options**, onglet **Options ETL**.

Par défaut, l'ETL est configuré pour calculer la disponibilité et les performances de toutes vos données : tous les groupes d'hôtes, toutes les catégories d'hôtes et toutes les catégories de services. Si vous ne souhaitez pas voir certains de ces groupes et catégories dans vos rapports, décochez **Tous les périmètres de groupe** et sélectionnez uniquement les données que vous souhaitez.

Sélectionnez les périodes et les catégories de services que vous souhaitez (disk, ping, memory, traffic). C'est également ici que vous configurez le niveau de précision que vous souhaitez pour les statistiques de données (c'est-à-dire calculées par mois, jour, heure...).

- Un rapport peut être généré vide si l'ETL n'a pas pu être exécuté, s'il y a un problème avec la configuration de l'ETL ou s'il n'y a pas de données de surveillance pour la ressource (aucun statut/métrique n'est renvoyé).
- L'ETL est statique : il ne détecte pas automatiquement les changements de configuration sur Centreon en dehors de ses exécutions régulières (programmées à 4h30 du matin par défaut). Vous devez [lancer une reconstruction des données](rebuilding-data.md) pour que les nouvelles données/configurations soient immédiatement prises en compte.
- Si la compilation des données a commencé depuis moins d'un mois, il est possible d'observer des trous dans les rapports qui affichent les données par mois ou comparent les mois entre eux.

## Permettre le partage des rapports

Les rapports générés peuvent être [partagés localement (via l'interface Centreon)](share.md) ou [publiés par email ou sur un serveur](reports-publication-rule.md). Avant de [créer une tâche](generating-reports.md#étape-1--créer-une-nouvelle-tâche), assurez-vous d'avoir créé les groupes de tâches ou les règles de publication dont vous avez besoin.

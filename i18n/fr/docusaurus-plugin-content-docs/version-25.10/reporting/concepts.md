---
id: concepts
title: Concepts MBI
description: "Vocabulaire et concepts clés utilisés dans toute la documentation de Centreon MBI"
---

MBI est une extension de Centreon avec son propre vocabulaire et ses propres concepts. Cette section présente les concepts clés pour comprendre Centreon MBI. Notez que cette section suppose que vous connaissiez déjà le [vocabulaire standard de Centreon](../resources/glossary.md).

## Rétention des données

Par défaut, [MBI garde les données](installation.md#etl-rétention-de-données) pour une durée de temps limitée. La durée dépend du type de données. Ce paramètre est configuré dans la page **Rapports > Monitoring Business Intelligence > General options**, onglet **Options de rétention des données**. La conservation des données peut également être complètement désactivée à partir de cette page.

## ETL

L'ETL récupère les données brutes du serveur central et les transforme en un format exploitable par MBI, puis les stocke dans la base de données où CBIS les récupérera pour générer les rapports.

L'ETL de MBI est statique, il ne détecte pas automatiquement les changements de configuration en dehors de [son exécution quotidienne le matin](how-mbi-works.md#phase-2--lancement-de-letl-les-données-sont-copiées-sur-mbi-puis-agrégées). Pour prendre en compte des changements de configuration immédiatement, [lancez une reconstruction](rebuilding-data.md).

## Dimension

Dans MBI, une dimension représente un axe d'analyse des données. Les rapports MBI calculent les données en fonction des dimensions (mais peuvent présenter les données avec des détails sur les hôtes individuels ou les groupes d'hôtes, par exemple).

La liste des dimensions présentes pour chaque hôte et service est calculée quotidiennement par l'ETL (script **dimensionBuilder.pl** lancé à 4h30 du matin par défaut).

Les hôtes et services pris en compte par MBI (et donc inclus dans le calcul des dimensions) sont ceux sélectionnés à la page **Reporting > Monitoring Business Intelligence > General options**, sous l'onglet **Options de l'ETL**, dans la section **Sélection du périmètre du reporting**.

## Règles d'ACL MBI

Pour pouvoir [donner aux utilisateurs l'accès aux rapports générés dans l'interface Centreon et/ou aux tâches planifiées](share.md), vous devez utiliser les règles d'ACL MBI (**Administration > ACL > MBI Options > ACL rules**). Les règles d'ACL MBI servent d'intermédiaire entre les [ACL Centreon](../administration/access-control-lists.md) classiques et les [groupes de tâches](#groupes-de-tâches), car ces deux éléments ne peuvent pas être liés directement.

## Métriques

Toutes les [métriques](../monitoring/metrics.md) de chaque service sont prises en compte. Pour chaque métrique, 5 statistiques sont calculées : moyenne, minimum, maximum, première, dernière.

Assurez-vous que vos services ne disposent que des métriques nécessaires, car cela peut avoir un impact sur les performances. Vous pouvez également vous assurer que MBI ne prend en compte qu'un nombre limité de groupes d'hôtes, de catégories d'hôtes et de catégories de services.

## Évènements

Dans MBI, un évènement est une période de temps associée à un statut. Il a une heure et date de début, une heure et date de fin, et un statut. Il sert à calculer la [disponibilité](#disponibilité).

Les résultats des contrôles sont convertis en évènements par le serveur central tous les jours à 3h du matin (script **eventReportBuilder**). Seuls les contrôles dans un état HARD sont pris en compte.

## Tâches

Une tâche (aussi appellée job) est la définition d'un rapport. Exécuter une tâche génère un rapport.

* Les tâches peuvent être exécutée immédiatement ou planifiées pour être exécutée à une date et heure spécifiques.
* Vous pouvez également décider si la tâche doit être exécutée une seule fois ou si elle doit être exécutée de manière périodique.

## Groupes de tâches

Les groupes de tâches déterminent [quels utilisateurs non administrateurs sont autorisés à consulter les rapports générés ou à modifier les tâches correspondantes](share.md).

* Créez des groupes de tâches à la page **Rapports > Monitoring Business Intelligence > Job groups**.
* Pour chaque tâche, définissez les personnes qui pourront consulter le rapport dans l'onglet **Configuration** de la tâche (champ **Groupes de tâches planifiées**). Le rapport sera visible pour les utilisateurs liés aux groupes de tâches sélectionnés.
* Veuillez noter que les données incluses dans le rapport dépendent des [droits sur les ressources](../administration/access-control-lists.md#filtres-daccès-aux-ressources) de l'utilisateur qui crée la tâche. Il incombe à l'utilisateur qui crée la tâche de s'assurer que les ressources incluses dans le rapport sont autorisées pour les utilisateurs avec lesquels il souhaite partager le rapport.

   Exemple : si l'**utilisateur 1** dispose de droits sur les hôtes **Paris** et **Londres**, le rapport contiendra les données relatives à **Paris** et **Londres**. Si le rapport est partagé avec l'**utilisateur 2** qui n'a pas de droits sur **Londres**, l'**utilisateur 2** pourra tout de même voir les données pour **Londres**, car le rapport a été généré de cette manière.

## Rapport

Résultat final d'une tâche. Les données contenues dans le rapport et sa mise en page sont déterminées par le modèle de rapport. Ce dernier est sélectionné parmi les options de [notre catalogue de rapports disponibles](available-reports/available-reports.md). Vous pouvez également [créer vos propres rapports avec BIRT](report-development.md).

## Utilisateur CBIS

Utilisateur de service créé automatiquement lors de l'installation de MBI. Cet utilisateur générera des rapports. L'utilisateur CBIS doit disposer d'un accès à toutes les ressources à l'aide des [ACLs Centreon](../administration/access-control-lists.md) pour fonctionner correctement.

## Disponibilité

Le temps passé par un hôte dans un [statut](../alerts-notifications/concepts.md#statut-des-hôtes) "disponible" au cours de la période sélectionnée. Seuls les [états HARD](../alerts-notifications/concepts.md#types-de-statuts) sont pris en compte dans le calcul de la disponibilité.

* Pour les hôtes : lors du calcul de la disponibilité, seule la durée pendant laquelle l'hôte a été dans un état **Disponible** ou **Indisponible** est prise en compte, et non la durée pendant laquelle il a été dans un état **INJOIGNABLE** ou en maintenance.
* Pour les services : lors du calcul de la disponibilité, seule la durée pendant laquelle le service a été dans un état **OK** ou **Alerte** est prise en compte, et non la durée pendant laquelle il a été dans un état **INCONNU** ou en maintenance.

Cela signifie que si un hôte ou un service a été disponible 90% du temps la veille et a été en maintenance les 10% restants, il apparaîtra comme disponible à 100% dans les rapports.

## Règles de publication

Par défaut, un rapport n'est disponible au téléchargement que dans **Rapports > Monitoring Business Intelligence > Report view**. Les [règles de publication](reports-publication-rule.md) permettent d'envoyer un rapport à des utilisateurs spécifiques chaque fois que la tâche correspondante est terminée.

## Modèles de rapports ("report designs")

Il existe plus de [30 modèles de rapports prêts à l'emploi](available-reports/available-reports.md) qui déterminent les données pouvant être affichées dans le rapport et la mise en page de celui-ci. Vous pouvez également [créer vos propres modèles de rapports avec BIRT](report-development.md).

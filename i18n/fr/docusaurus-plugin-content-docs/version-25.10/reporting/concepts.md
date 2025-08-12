---
id: concepts
title: Concepts MBI
---

MBI est une extension de Centreon avec son propre vocabulaire et ses propres concepts. Cette section présente les concepts clés pour comprendre Centreon MBI. Notez que cette section suppose que vous connaissez déjà le [vocabulaire standard de Centreon](https://docs.centreon.com/fr/docs/resources/glossary/).

## Rétention des données

Par défaut, [MBI retient les données](installation.md#etl-rétention-de-données) pour une durée de temps limitée. La quantité de temps dépend du type de données. La durée dépend du type de données. Ce paramètre est configuré dans la page **Rapports > Monitoring Business Intelligence > General options**, onglet **Options de rétention des données**. La conservation des données peut également être complètement désactivée à partir de cette page.

## ETL

L'ETL récupère les données brutes du serveur central et les transforme en un format lisible par MBI, puis les stocke dans la base de données où CBIS les récupérera pour générer les rapports.

L'ETL de MBI est statique, il ne détecte pas automatiquement les changements de configuration en dehors de [son contrôle de routine le lendemain matin](how-mbi-works.md#phase-2-the-etl-is-launched-data-is-copied-to-mbi-and-aggregated). For changes to be taken into account right away, [launch a rebuild](rebuilding-data.md).

## Dimension

Dans MBI, une dimension représente un axe d'analyse des données. Les rapports MBI calculent les données en fonction des dimensions (mais peuvent présenter les données avec des détails sur les hôtes individuels ou les groupes d'hôtes, par exemple).

La liste des dimensions présentes pour chaque hôte et service est calculée quotidiennement par l'ETL (script **dimension_builder.pl** lancé à 4h30 du matin par défaut).

Les hôtes et services pris en compte par MBI (et donc inclus dans le calcul des dimensions) sont ceux sélectionnés dans la page **Reporting > Monitoring Business Intelligence > General options**, sous l'onglet **Options de l'ETL**, dans la section **Sélection du périmètre du reporting**.

## Règles d'ACL MBI

Pour pouvoir [donner aux utilisateurs l'accès aux rapports générés dans l'interface Centreon et/ou aux tâches](share.md), vous devez utiliser les règles d'ACL MBI (**Administration > ACL > ACL rules**). Les règles d'ACL MBI servent d'intermédiaire entre les [ACL Centreon](https://docs.centreon.com/fr/docs/administration/access-control-lists/) classiques et les [groupes de tâches](#groupes-de-tâches), car ces deux éléments ne peuvent pas être liés directement.

## Métriques

Toutes les métriques de chaque service sont prises en compte. Pour chaque métrique, 5 statistiques sont calculées : moyenne, minimum, maximum, première, dernière.

Assurez-vous que vos services ne disposent que des métriques nécessaires, car cela peut avoir un impact sur les performances. Vous pouvez également vous assurer que MBI ne prend en compte qu'un nombre limité de groupes d'hôtes, de catégories d'hôtes et de catégories de services.

## Event

In MBI, an event is a period of time associated with a status. It has a start date/time, an end date/time, and a status. Its purpose is to be able to calculate [availability](#availability).

Check results are converted into events by the central server every day at 3AM (**eventReportBuilder** script). Only checks in a HARD state are taken into account.

## Tâches

Une tâche (aussi appellée job) est la définition d'un rapport. Exécuter une tâche génère un rapport.

* Les tâches peuvent être exécutée immédiatement ou planifiées pour être exécutée à une date et heure spécifiques.
* Vous pouvez également décider si la tâche doit être exécutée une seule fois ou si elle devrait être exécutée de manière périodique.

## Groupes de tâches

Les groupes de tâches déterminent [quels utilisateurs non administrateurs sont autorisés à consulter chaque rapport généré ou à modifier la tâche correspondante](share.md).

* Vous créez des groupes de tâches à l'aide de la page **Rapports > Monitoring Business Intelligence > Job groups**.
* Pour chaque tâche, vous définissez les personnes qui pourront consulter le rapport dans l'onglet **Configuration** de la tâche (champs **Groupes de tâches planifiées**). Un rapport sera visible pour les utilisateurs liés aux groupes de tâches sélectionnés
* Veuillez noter que les données incluses dans le rapport dépendent des [droits sur les ressources](https://docs.centreon.com/docs/administration/access-control-lists/#access-filters-on-resources) de l'utilisateur qui crée la tâche. Il incombe à l'utilisateur qui crée la tâche de s'assurer que les ressources incluses dans le rapport sont autorisées pour les utilisateurs avec lesquels il souhaite partager le rapport.

   Exemple : si **l'utilisateur 1** dispose de droits sur les hôtes **Paris** et **Londres**, le rapport contiendra les données relatives à **Paris** et **Londres**. Si le rapport est partagé avec l'**utilisateur 2** qui n'a pas de droits sur **Londres**, l'**utilisateur 2** pourra tout de même voir les données pour **Londres**, car le rapport a été généré de cette manière.

## Rapport

Résultat final d'une tâche. Les données contenues dans le rapport et sa mise en page sont déterminées par le modèle de rapport. Ce dernier est sélectionné parmi les options de [notre catalogue de rapports disponibles](available-reports/available-reports.md). Vous pouvez également [créer vos propres rapports avec BIRT](report-development.md).

## CBIS user

Utilisateur du service créé automatiquement lors de l'installation de l'extension. Cet utilisateur générera des rapports. L'utilisateur CBIS doit disposer d'un accès à toutes les ressources à l'aide des [ACLs Centreon](https://docs.centreon.com/fr/docs/administration/access-control-lists/) pour correctement.

## Disponibilité

Le temps passé par un hôte dans un état « disponible » [status](https://docs.centreon.com/fr/docs/alerts-notifications/concepts/#host-status) au cours de la période sélectionnée. Seuls les [états hard](https://docs.centreon.com/fr/docs/alerts-notifications/concepts/#status-types) sont pris en compte dans le calcul de la disponibilité.

* Pour les hôtes : lors du calcul de la disponibilité, seule la durée pendant laquelle l'hôte a été dans un état Disponible ou Indisponible est prise en compte, et non la durée pendant laquelle il a été dans un état INJOIGNABLE ou en maintenance.
* Pour les services : lors du calcul de la disponibilité, seule la durée pendant laquelle le service a été dans un état « OK » ou « Alerte » est prise en compte, et non la durée pendant laquelle il a été dans un état INCONNU ou en maintenance.

Cela signifie que si un hôte ou un service a été disponible 90% du temps la veille et a été en maintenance les 10% restants, il apparaîtra comme disponible à 100% dans les rapports.

## Règles de publication

Par défaut, un rapport n'est disponible au téléchargement que dans **Rapports > Monitoring Business Intelligence > Report view**. Les [règles de publication](reports-publication-rule.md) permettent d'envoyer un rapport à des utilisateurs spécifiques chaque fois que la tâche correspondante est terminée.

## Modèles de rapports

Templates pour les rapports. Il existe plus de [30 modèles de rapports prêts à l'emploi](available-reports/available-reports.md) qui déterminent les données pouvant être affichées dans le rapport et la mise en page de celui-ci. Vous pouvez également [créer vos propres modèles de rapports avec BIRT](report-development.md).
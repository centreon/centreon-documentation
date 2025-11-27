---
id: introduction
title: Introduction à Centreon MBI
---

## Qu'est-ce que Centreon MBI ?

Centreon Monitoring Business Intelligence (MBI) est une extension qui permet de générer des rapports sur les groupes d'hôtes, les catégories d'hôtes et les catégories de services. MBI nécessite que les utilisateurs [préparent leurs données](preparing-data.md) soigneusement afin que les rapports puissent être générés.
Nous vous recommandons vivement de lire notre documentation afin d'éviter tout problème. Vous pouvez commencer par consulter notre page [concepts](concepts.md).

> Centreon MBI est une **extension** de Centreon qui nécessite une [licence](../administration/licenses.md) valide.
> Pour en acheter une et récupérer les dépôts nécessaires, contactez
> [Centreon](mailto:sales@centreon.com).

## Que fait MBI ?

Centreon MBI exécute des [tâches](concepts.md#tâches) pour générer des rapports. MBI dispose de plus de 30 designs (des "modèles" de rapport) prêts à l'emploi.

![image](../assets/reporting/first_page.png)

Les rapports traitent :

* La planification et la gestion des capacités
* La gestion de la disponibilité
* La gestion des SLA (Service Level Agreement)
* La gestion des performances.

  Cela permet d'avoir une vue d'ensemble des performances des ressources sélectionnées sur une période donnée. Ces rapports peuvent être configurés pour être générés une seule fois ou à intervalles réguliers (c'est-à-dire une fois par jour, par semaine, par mois...). Cela vous aidera à suivre votre environnement informatique grâce à des rapports mensuels sur la disponibilité, des résumés hebdomadaires sur les performances de l'infrastructure...

## Quel type de données peut apparaître dans les rapports ?

Les rapports peuvent afficher des données sur :

- Les groupes d'hôtes
- Les catégories d'hôtes
- Les catégories de services
- Les vues métier
- Les activités métier

Bien que les données [doivent être organisées en groupes et catégories](preparing-data.md#mettre-vos-ressources-à-la-disposition-de-mbi), certains rapports vous permettent de voir les détails des statuts et des métriques des hôtes et des services.

MBI crée également des rapports sur la disponibilité en convertissant les contrôles en [évènements](concepts.md#évènements). Notez que MBI ne prend en compte que les [statuts HARD](concepts.md#types-de-statuts) lors du calcul de la disponibilité.

Notez que les rapports ne contiennent que les données jusqu'à la veille. Les données de chaque jour sont [agrégées par l'ETL le lendemain](how-mbi-works.md#phase-2--lancement-de-letl-les-données-sont-copiées-sur-mbi-puis-agrégées).

## Quels sont les formats de sortie possibles ?
  
* MBI génère des rapports dans différents formats : PDF, CSV, XLSX, DOCX, PPTX, ODT, ODS, ODP.
* Tous les rapports ne peuvent pas être exportés dans tous les formats : consultez notre [liste des rapports disponibles](available-reports/available-reports.md) pour en savoir plus sur les spécificités de chaque rapport.
* Par défaut, ces rapports peuvent être téléchargés à partir de la page **Rapports > Monitoring Business Intelligence > Report view**, mais ils peuvent également être [configurés pour être envoyés à des personnes spécifiques lorsqu'ils sont générés](reports-publication-rule.md).
* Les données des rapports peuvent également être affichées dans vos [vues personnalisées](../alerts-notifications/custom-views.md) Centreon à l'aide de [widgets](widgets.md) dédiés.
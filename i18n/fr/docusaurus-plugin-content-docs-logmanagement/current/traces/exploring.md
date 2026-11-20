---
id: traces-explore
title: Explorer et analyser les traces
description: "Recherchez des traces dans Trace explorer, passez d'un log à sa trace, visualisez les dépendances entre services et comparez deux périodes."
---

## Trace explorer

Trace explorer fonctionne comme [Log explorer](../log-explorer.md) : vous utilisez la même [syntaxe de requête](../query-syntax.md), le même [Query builder et les mêmes filtres](../log-explorer.md#rechercher-des-logs) pour rechercher et analyser vos traces.

Cliquez sur une trace pour afficher sa vue en cascade. Dans cette vue, cliquez sur un span pour afficher son détail sous la cascade. Le champ **Status** indique si l'opération s'est terminée avec succès.

### Passer d'un log à sa trace

Dans **Log explorer**, lorsqu'un log signale une erreur, la trace à laquelle il appartient vous donne le contexte complet : ce qui s'est passé avant et après, dans chacun des services concernés.

1. Dans Log explorer, ouvrez un log.
2. Dans le panneau de détails, allez dans **Attributes** > **Other fields**. Si le log possède un champ `trace_id`, il a été émis pendant l'exécution enregistrée par cette trace.
3. Ouvrez l'onglet **Trace** pour afficher la vue en cascade de toute l'exécution.
4. Pour ouvrir la trace dans Trace explorer, cliquez sur le `trace_id` en haut du panneau.

### Passer d'une trace aux logs associés

1. Dans Trace explorer, dans le panneau de détails d'une trace, cliquez sur un span dans la vue en cascade.
2. Faites défiler vers le bas : l'onglet **Logs** affiche la liste des logs associés. Cliquez dessus pour les afficher dans Log explorer.

## Graphe des services

**Traces > Service graph**.

Le graphe des services construit automatiquement une carte de vos services à partir de vos traces et montre comment ils s'appellent entre eux. Il est généré dynamiquement : chaque connexion détectée dans vos traces apparaît sur la carte. Il reste donc à jour quand votre architecture évolue, sans aucune configuration manuelle.

Le graphe des services vous permet de :

* **Visualiser les dépendances entre services** : voyez d'un coup d'œil quel service appelle quel autre, y compris des dépendances dont vous n'aviez peut-être pas connaissance.
* **Identifier l'origine d'un problème** : en cas d'incident, repérez rapidement le service défaillant et les services qu'il affecte.

## Comparer des groupes de traces

**Traces > Compare groups**.

La fonctionnalité **Compare trace groups** vous permet d'exécuter la même requête sur deux périodes différentes et d'en comparer les résultats côte à côte.

Par exemple, après un déploiement, vous pouvez comparer les traces d'avant et d'après la mise en production pour vérifier si celle-ci a eu un impact sur les performances.

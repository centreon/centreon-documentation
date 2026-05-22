---
id: explore-analyze
title: Explorer et analyser les logs
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Selon votre [cas d'usage](./getting-started/use-cases.md), vous pouvez soit filtrer les logs de la page Log explorer pour afficher les logs à haut niveau de sévérité, soit vous baser sur les évènements d'alerte (alert events) pour les situations plus complexes.

> Pour afficher des logs dans Centreon Log Management, vous devez d'abord [configurer un collecteur OpenTelemetry sur chaque hôte dont vous souhaitez recevoir les logs](./collector/collector.md).

## Utiliser la page Log explorer

La page **Log explorer** page vous permet de rechercher et de filtrer les logs afin que vous puissiez investiguer les problèmes et effectuer une analyse de leurs causes profondes.

### Période de temps

* Utilisez la liste **Time period** en haut à droite de la page pour sélectionner la plage de logs à afficher.
* Naviguez dans vos données à l'aide de la chronologie : cliquez et faites glisser votre souris sur le graphique pour sélectionner une nouvelle plage de temps.

### Rechercher des logs

Utilisez la barre de recherche pour filtrer vos logs. La barre de recherche propose deux modes (utilisez le bouton à droite pour sélectionner celui de votre choix) :

* En mode requête:

   * Saisissez directement votre recherche en utilisant la [syntaxe de requête](query-syntax.md).
   * Cliquez sur le bouton **Ask AI** à droite dans la barre de recherche. Saisissez votre requête avec vos propres mots dans le champ qui s'affiche, puis cliquez sur **Apply and search**. Cela générera une requête avec la syntaxe correcte.

   > Les réponses de l'IA peuvent être inexactes ou incomplètes. Vérifiez toujours les résultats.

   ![image](assets/ask-ai.png)

* En mode **Query builder**, des blocs vous permettent de construire votre recherche étape par étape : ajoutez un bloc, sélectionnez des noms d'attributs et des valeurs, puis des éléments de syntaxe tels que AND, OR et NOT.

   * Cliquez sur le signe + dans la barre de recherche pour ajouter un bloc vide.
   * Ajoutez automatiquement un bloc prérempli en cliquant sur le signe + à gauche d'une valeur d'attribut dans le panneau **Filtres**.

   ![image](./assets/log_explorer_full.png)

Dans les deux cas, vous devez cliquer sur le bouton **Search** pour lancer la recherche.

### Informations détaillées sur les logs

Cliquez sur un log pour afficher toutes les informations associées dans le panneau **Log details**, y compris l'entrée brute de log.

* Vous pouvez ouvrir plusieurs logs dans le panneau.
* La barre de recherche regarde dans les noms et les valeurs des attributs.

## Utiliser la page Alert events

Sur la page [**Alert events**](alerts.md#afficher-tous-les-évènements-dalerte), les [évènements d'alerte](./resources/glossary.md#évènement-dalertestatut-dalerte) indiquent ce qui se passe en temps réel et vous permettent de réagir rapidement aux incidents. (Pour obtenir des évènements d'alerte, vous devez d'abord créer des [règles d'alerte](alerts.md).)

<!-- ### Generating a summary of your logs

Once the **Log explorer** page only shows the logs you want, generate a summary of the displayed logs to see what they can tell you: click the **Summarize logs** button to the right of the search bar.
Log summaries are a list of the main events detected for a period:

- Critical errors and failures
- Security-related events
- Unusual system behavior
- Important updates or configuration changes -->

## Utiliser des tableaux de bord

Créez des [tableaux de bord](dashboards.md) pour visualiser et explorer vos données. Les tableaux de bord affichent à la fois les informations actuelles et les données historiques, ce qui vous permet d'examiner les tendances et de comprendre les changements au fil du temps.

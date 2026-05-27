---
id: log-explorer
title: Utiliser log explorer
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

La page **Log explorer** page vous permet de rechercher et de filtrer les logs afin que vous puissiez investiguer les problèmes et effectuer une analyse de leurs causes profondes.

## Période de temps

* Utilisez la liste **Time period** en haut à droite de la page pour sélectionner la plage de logs à afficher.
* Naviguez dans vos données à l'aide de la chronologie : cliquez et faites glisser votre souris sur le graphique pour sélectionner une nouvelle plage de temps.

## Rechercher des logs

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

## Informations détaillées sur les logs

Cliquez sur un log pour afficher toutes les informations associées dans le panneau **Log details**, y compris l'entrée brute de log.

* Vous pouvez ouvrir plusieurs logs dans le panneau.
* La barre de recherche regarde dans les noms et les valeurs des attributs.

## Réorganiser les colonnes

* Utilisez le bouton **Search and add column** en haut à droite des résultats pour choisir les colonnes/attributs que vous souhaitez afficher.

   ![image](assets/column-management.png)
  
* La colonne **Time** s'affiche toujours en premier et ne peut pas être désépinglée. Vous pouvez épingler une seule autre colonne en deuxième position.

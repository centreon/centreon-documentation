---
id: ram
title: Attribuer des droits aux utilisateurs sur les ressources
---

Les règles d'accès aux ressources vous permettent d'attribuer aux utilisateurs le droit de voir des [ressources](../resources/glossary.md#resource) spécifiques.

Par défaut, tous les utilisateurs peuvent voir toutes les ressources. En effet, une règle par défaut nommée "ALL" est créée automatiquement à l'installation de la plateforme.

Les administrateurs peuvent créer des règles plus spécifiques pour déterminer quels utilisateurs peuvent voir quelles ressources. Seuls les administrateurs ont accès à l'écran de gestion de l'accès aux ressources.

Vous pouvez créer autant de règles que vous désirez. Si un utilisateur est mentionné dans deux règles aux droits différents, c'est la règle la plus permissive qui l'emportera.

## Attribuer des droits à des utilisateurs

Voici la marche à suivre si vous ne souhaitez pas que tous les utilisateurs puissent voir toutes les ressources :

1. [Créez](#creating-an-access-rule) une première règle d'accès qui vous donne le droit de voir toutes les ressources (il peut être pertinent d'attribuer ce droit à tous les administrateurs).
2. [Supprimez](#managing-access-rules) la règle par défaut nommée "ALL".
3. Créez les règles désirées pour vos utilisateurs.

## Créer une règle d'accès

1. Allez à la page **Administration > ACL > Gestion de l'accès aux ressources**, puis cliquez sur le bouton **Ajouter** au-dessus de la liste, à gauche. Une fenêtre apparaît.
2. Entrez un nom et une description.
3. Dans la section **Add resource datasets**, définissez à quelles ressources vous voulez donner accès :
   * Sélectionnez un type de ressource dans la liste, puis sélectionnez les ressources auxquelles vous voulez donner accès.
   * Pour affiner votre sélection, cliquez sur **Add filter** et sélectionnez des critères plus restrictifs : le deuxième filtre montre uniquement les ressources qui dépendent du premier filtre. Vous pouvez ainsi descendre jusqu'aux métriques.
   * Si vous voulez ajouter un autre groupe de ressources indépendant des critères définis au-dessus, cliquez sur **Ajouter un nouveau jeu de données**. La liste propose à nouveau tous les types de ressources.

   > Vous pouvez également sélectionner **All resources** : les utilisateurs pourront voir toutes les ressources existantes ainsi que toutes celles crées par la suite.

4. Dans la section **Contacts/Groupes de contacts**, définissez quels utilisateurs verront ces ressources. Si vous sélectionnez **Tous les contacts**, la règle s'appliquera à tous les contacts existants, mais aussi à tout contact créé dans le futur. Attention, les utilisateurs sont gérés via la [CIAM](../ciam/ciam.md).

   > Les groupes de contacts seront implémentés bientôt.

5. Cliquez sur **Enregistrer**. La nouvelle règle apparaît dans la liste. (is it applied straightaway?)

## Gérer les règles d'accès

* Pour dupliquer une règle, cliquez sur le bouton **Dupliquer** correspondant à cette règle dans la colonne **Actions**.
* Pour supprimer une règle particulière, cliquez sur le bouton **Supprimer** correspondant à cette règle dans la colonne **Actions**.
* Pour supprimer plusieurs règles, sélectionnez-les en cochant les cases correspondantes dans la colonne de gauche, puis cliquez sur le bouton **Supprimer** au-dessus de la liste.
* Vous pouvez désactiver une règle au lieu de la supprimer si vous pensez en avoir besoin ultérieurement : utilisez le switch correspondant à cette règle dans la colonne **Statut**. Les utilisateurs concernés ne pourront plus voir les ressources définies dans la règle.

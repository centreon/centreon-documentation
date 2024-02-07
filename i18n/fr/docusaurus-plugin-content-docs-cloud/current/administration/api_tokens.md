---
id: api-tokens
title: API tokens
---

En utilisant l'API, une application tierce peut réaliser des actions dans Centreon. Pour ce faire, l'application tierce doit s'authentifier auprès de Centreon, à l'aide d'un compte utliisateur et d'un jeton d'API.

Un jeton est lié à un [utilisateur Centreon](../users/users.md). Les appels API seront exécutées en fonction des [droits assignés à cet utilisateur](../users/users.md#user-roles). Un même utilisateur peut avoir plusieurs jetons.

## Qui peut créer des jetons d'API ?

* [Les utilisateurs ayant un rôle **Editor** ou **Administrator**](../users/users.md#user-roles) ont accès à la page **Administration > Jetons d'API** et peuvent créer des jetons d'API pour leur propre usage.
* Les utilisateurs ayant un rôle **Administrator** peuvent également voir les jetons créés par d'autres utilisateurs, et créer des jetons pour d'autres utilisateurs.

## Créer un jeton d'API

1. Allez à la page **Administration > Jetons d'API**.
2. Cliquer sur **Générer un nouveau jeton**. Une fenêtre pop-up apparaît.
3. Remplissez les champs demandés puis cliquez sur **Générer un nouveau jeton**. Un champ **Jeton** apparaît dans la fenêtre.
4. Copiez le jeton à l'aide du bouton à droite du champ. Stockez le jeton avec soin : vous ne pourrez pas l'afficher une deuxième fois.
5. Cliquez sur **Terminé**.

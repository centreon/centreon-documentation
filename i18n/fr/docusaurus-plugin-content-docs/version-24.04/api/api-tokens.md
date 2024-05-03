---
id: api-tokens
title: Jetons d'API
---

Avec un jeton d'application, une application tierce peut faire des appels à l'API Centreon afin de réaliser des actions dans Centreon (webhooks).

Un jeton est lié à un [utilisateur Centreon](../monitoring/basic-objects/contacts.md) et a une durée de validité. Les appels API seront exécutées en fonction des [droits assignés à cet utilisateur](../administration/access-control-lists.md#donner-des-droits-à-un-utilisateur). Un même utilisateur peut avoir plusieurs jetons.

## Qui peut créer des jetons d'API ?

* [Les utilisateurs ou les administrateurs](../administration/access-control-lists.md#donner-des-droits-à-un-utilisateur) ayant accès à la page **Administration > Jetons d'API** peuvent créer des jetons d'API pour leur propre usage.
* Les administrateurs peuvent également voir les jetons créés par d'autres utilisateurs, créer des jetons pour d'autres utilisateurs, ou les désactiver ou les supprimer.

## Créer un jeton d'API

1. Allez à la page **Administration > Jetons d'API**.
2. Cliquer sur **Générer un nouveau jeton**. Une fenêtre pop-up apparaît.
3. Remplissez les champs demandés puis cliquez sur **Générer un nouveau jeton**. Un champ **Jeton** apparaît dans la fenêtre.
4. Copiez le jeton à l'aide du bouton à droite du champ. Stockez le jeton avec soin : vous ne pourrez pas l'afficher une deuxième fois.
5. Cliquez sur **Terminé**.

## Gérer les jetons d'API

La liste des jetons indique le statut de chaque jeton dans la colonne de gauche (activé, valide mais désactivé, périmé). La date de dernière utilisation du jeton est également indiquée.

Les utilisateurs ayant le rôle **Administrator** peuvent :

* Désactiver un jeton d'API valide en utilisant le switch **Activé/Désactivé** à droite de la ligne. Le jeton pourra être réactivé si besoin.
* Supprimer totalement un jeton en utilisant le bouton **Supprimer**.

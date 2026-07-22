---
id: authentication-tokens
title: Jetons d'authentification
description: "Présentation des jetons d'authentification API et CMA, de qui peut les créer, et comment les générer, désactiver ou supprimer"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Il existe plusieurs types de jetons d'authentification :

* Les [jetons d'API](api_tokens.md) : utilisés pour authentifier les requêtes adressées à l'API Centreon, permettant ainsi à des outils ou scripts externes d'interagir avec la plateforme programmatiquement.
* Les [jetons CMA](../cma/cma.md) : utilisés pour sécuriser la communication entre l'agent CMA et le poller — l'agent l'inclut dans ses requêtes, et le moteur de surveillance vérifie qu'il est présent et valide avant d'accepter la connexion.
<!--* Les jetons Poller : utilisé pour authentifier un poller lors de son enregistrement sur un serveur central, en mode PullWSS. Il garantit que seuls les pollers autorisés peuvent se connecter et envoyer des données au serveur central.-->

Sur la page **Administration > Jeton d'authentification**, vous pouvez filtrer la liste des jetons selon différents critères, notamment par type.

## Qui peut créer des jetons d'API ?

[Les utilisateurs ayant un rôle **Administrator**](../users/users.md#rôles-des-utilisateurs) ont accès à la page **Administration > Jetons d'authentification** et peuvent :

* créer des jetons d'API pour leur propre usage.
* voir la liste des jetons créés par d'autres utilisateurs.
* créer des jetons pour d'autres utilisateurs, les désactiver ou les supprimer.

## Créer un jeton d'API

1. Allez à la page **Administration > Jetons d'authentification**.
2. Cliquer sur **Ajouter**. Une fenêtre pop-up apparaît.
3. Remplissez les champs demandés, sélectionnez le type désiré dans la liste **Type**, puis cliquez sur **Créer un nouveau jeton**. Un champ **Jeton** apparaît dans la fenêtre. Vous pouvez cliquer sur l'icône en forme d'œil pour afficher le jeton si vous le souhaitez.
4. Copiez le jeton à l'aide du bouton "copie" à droite du champ.
   * Jetons d'API : Stockez votre jeton avec soin car vous ne pourrez pas l'afficher une deuxième fois.
   * Les jetons CMA peuvent être réaffichés.
5. Cliquez sur **Fermer**.

## Gérer les jetons d'API

La liste des jetons indique le statut de chaque jeton dans la colonne de gauche (activé, valide mais désactivé, périmé).<!--  La date de dernière utilisation du jeton est également indiquée. -->

Les utilisateurs ayant le rôle **Administrator** peuvent :

* Désactiver un jeton d'API valide en utilisant le switch **Activé/Désactivé** à droite de la ligne. Le jeton pourra être réactivé si besoin.
* Supprimer totalement un jeton en utilisant le bouton **Supprimer**.

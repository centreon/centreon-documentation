---
id: tokens
title: Gérer les jetons d'accès
description: "Découvrez comment créer, définir la portée et révoquer les jetons d'accès qui authentifient les agents, les sondes et les appels d'API de Centreon Experience Monitoring."
---

Certaines fonctionnalités d'Experience Monitoring nécessitent des jetons d'accès pour fonctionner.

* Les [agents système](../installation/servers/install-system-agents.md) qui supervisent l'état de santé d'un serveur hôte.
* Les [marqueurs d'évènements](./monitor-production-events.md) placés sur les graphiques via l'API.
* L'export de données (à l'aide de jetons d'API [personnels ou d'organisation](#jetons-dorganisation-et-jetons-personnels)).
* Les [sondes STM](../configuration/user-journey/stm-zones.md). La zone STM doit avoir été créée avant de créer le jeton.

> Les jetons d'accès ont été déplacés vers l'onglet **Tokens** de la page de chaque organisation. Les jetons existants ont été migrés automatiquement et continueront de fonctionner sans avoir besoin d'effectuer une rotation.

## Jetons d'organisation et jetons personnels

* Les jetons d'organisation sont utilisés lorsque l'action doit continuer à s'exécuter sans utilisateur spécifique.<!-- Ils vous permettent d'interagir avec l'API publique, ainsi qu'avec les sondes et les agents. --> Seuls les utilisateurs ayant un rôle [**Administrateur**](../configuration/manage-users-and-rights.md#rôles) peuvent créer des jetons d'organisation.
* Les jetons personnels sont liés aux droits de chaque utilisateur. Les utilisateurs ayant un rôle [**Member**](../configuration/manage-users-and-rights.md#rôles) peuvent uniquement créer des jetons personnels de type lecture seule.

## Autorisations des jetons

Les autorisations s'appliquent aux jetons d'API.

* **Read-only** : récupérer des données.
* **Admin** : écrire sur tous les endpoints de l'API publique.

Les autres types de jetons se voient automatiquement attribuer un rôle appelé **Push** : l'écriture n'est autorisée que sur un nombre limité d'endpoints.

## Créer un jeton d'accès

1. Accédez à la page appropriée selon le type de jeton que vous souhaitez créer :
   * **jetons d'organisation** : accédez à la page de l'organisation, puis sélectionnez l'onglet **Tokens**.
   * **jetons personnels** : cliquez sur votre icône utilisateur en haut à droite, puis cliquez sur **My Account**.
2. Cliquez sur le bouton **Create token**.
3. Dans la fenêtre de configuration, saisissez une description qui explique à quoi servira le jeton, ainsi qu'une période de validité. Le nom du jeton affichera les 4 premiers caractères du jeton, suivis d'astérisques.
4. Saisissez ou sélectionnez toutes les autres informations pertinentes :

   | Type de jeton | Champ |
   | --- | --- |
   | Sonde ([zone STM](../configuration/user-journey/stm-zones.md)) | Zone STM que le jeton permettra de sonder |
   | Agent système | Site dont la machine hôte sera supervisée |
   | API de données (organisation et personnel) | Portée (organisation/site), [Rôle (autorisations des jetons)](#autorisations-des-jetons).<br/>Basez vos autorisations sur le principe du moindre privilège. |
   | Évènements personnalisés (marqueurs d'évènements) | Le site sur lequel vous souhaitez placer les marqueurs d'évènements<br />L'icône personnalisée que vous souhaitez afficher pour votre marqueur d'évènement. |

5. Cliquez sur **Create a token**. Le jeton s'affiche dans le champ **Token**. Copiez-le immédiatement : il ne s'affiche qu'une seule fois. Une fois la fenêtre fermée, le secret ne peut plus être récupéré, restauré ni affiché à nouveau. Si un jeton est perdu avant d'être stocké en toute sécurité dans votre environnement d'intégration, vous devez [révoquer](#révoquer-un-jeton-daccès) le jeton existant et en générer un nouveau.

## Révoquer un jeton d'accès

La révocation d'un jeton est immédiate et irréversible : elle met fin à toutes les sessions actives et à toutes les requêtes d'API qui utilisent ce jeton.

Dans la liste des jetons, cliquez sur l'icône **Revoke** associée au jeton, puis confirmez l'action. Toute tentative d'authentification ultérieure utilisant le jeton révoqué renverra une réponse **401 Unauthorized**.

## Bonnes pratiques de sécurité

* Rotation des jetons : mettez à jour vos jetons régulièrement.
* Minimisation de la portée : privilégiez **Read-only** plutôt que **Admin** lorsque cela est possible.

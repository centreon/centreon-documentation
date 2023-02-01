---
id: map-web-access
title: Gérer les droits d'accès dans MAP
---

Cette page explique comment les utilisateurs accédent aux cartes en fonction de privilèges bien définis.

Les utilisateurs pouvant créer des cartes sont :

- Les administrateurs Centreon.
- Les utilisateurs appartenant à un groupe d'accès auquel le rôle de créateur est attribué.

Les droits d'accès à une carte - également appelés privilèges - ne sont pas gérés au niveau de l'utilisateur, mais par le biais de groupes d'accès. Vous pouvez accéder à une carte parce que vous appartenez à un groupe d'accès qui dispose de privilèges pour accéder à cette carte. Les privilèges vous permettent d'effectuer certaines actions spécifiques sur les cartes.

## Rôle de créateur de cartes
 
### Vérifier le statut de créateur

Suivez cette procédure pour vérifier si vous êtes autorisé à créer une carte.

1. Allez dans **Supervision > Map**.

2. Dans la page **Map**, le bouton **Add a Map** signifie que vous êtes autorisé à créer une carte. Cela signifie que vous appartenez à un groupe d'accès auquel le rôle de créateur est attribué.

### Attribuer le rôle de créateur
 
Seuls les administrateurs Centreon peuvent créer des cartes et autoriser les utilisateurs à créer des cartes.

Suivez cette procédure pour permettre aux utilisateurs de créer des cartes en leur attribuant des droits sur le groupe d'accès auquel ils appartiennent.

1. En tant qu'administrateur, allez dans **Supervision > Map**.

2. Cliquez sur **Edit creators**.
Une liste des groupes existants s'affiche.

3. Sélectionnez le(s) groupe(s) d'accès que vous souhaitez.

4. Cliquez sur **Sauvegarder** pour confirmer.
Les utilisateurs appartenant au groupe d'accès sélectionné sont maintenant autorisés à créer des cartes.
 
## Privilèges sur une carte

Assurez-vous que les utilisateurs sont bien regroupés en groupes d'accès. Cela facilitera l'attribution de privilèges en fonction de ces groupes.

### Gérer les utilisateurs dans les groupes d'accès

Les utilisateurs doivent appartenir au bon groupe pour avoir accès à des cartes spécifiques. Voir la procédure [Créer un groupe d'accès](../administration/access-control-lists.md#créer-un-groupe-daccès).

### Accorder des privilèges sur une carte

Les privilèges sont accordés lorsque vous effectuez l'action de partager une carte. Au niveau de la carte, vous pouvez spécifier quel groupe d'accès est autorisé à accéder à cette carte, ainsi que des privilèges spécifiques.

Suivez cette procédure pour accorder des privilèges à l'aide de la fonctionnalité de partage :

1. Allez dans **Supervision > Map**.
La page **Map** s'affiche avec la liste des cartes disponibles.

2. Cliquez sur le bouton de **partage** correspondant à la carte que vous souhaitez partager.
La liste des groupes d'accès disponibles s'affiche.

3. Pour le groupe d'accès souhaité, sélectionnez le privilège à accorder dans la liste déroulante.

4. Cliquez **Sauvegarder** pour confirmer.
Si un utilisateur appartient à plusieurs groupes d'accès, le privilège ayant le plus de permissions sera appliqué.

Ce tableau décrit les types de privilèges et les permissions associées :

|            | Aucun privilège | Accès en lecture | Accès en écriture | Propriétaire |
|------------|------|--------|--------|-------|
| Peut consulter    |      |   x    |    x   |   x   | 
| Peut éditer   |      |        |    x   |   x   |
| Peut partager  |      |        |        |   x   |
| Peut supprimer |      |        |        |   x   |

- Lorsque vous créez une carte, vous et les utilisateurs de votre groupe d'accès disposez des privilèges en tant que propriétaire de cette carte.
- Les administrateurs Centreon sont des créateurs et disposent des privilèges de propriétaire sur toutes les cartes.
- Les utilisateurs disposant de privilèges de propriétaire peuvent également définir ou modifier les propriétés de la carte (nom et icône).
- Le partage d'une carte permet au destinataire d'acquérir des privilèges sur cette carte.

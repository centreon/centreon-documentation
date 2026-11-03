---
id: map-understanding-access
title: Comprendre les droits d'accès aux cartes (ACL)
description: "Comprendre le fonctionnement du contrôle d'accès et des privilèges pour les vues Centreon MAP"
---

Cette page explique comment les utilisateurs accédent aux cartes en fonction de privilèges bien définis.

Les droits d'accès à une carte - également appelés privilèges - ne sont pas gérés au niveau de l'utilisateur, mais par le biais de groupes d'accès. Vous pouvez accéder à une carte parce que vous appartenez à un groupe d'accès qui dispose de privilèges pour accéder à cette carte. Les privilèges vous permettent d'effectuer certaines actions spécifiques sur les cartes.

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

Le contrôle d'accès aux cartes n'est appliqué qu'au niveau de la carte. Lorsque vous disposez du privilège « Viewer », vous pouvez visualiser une carte et toutes les ressources qu'elle contient, même si vous ne disposez pas de la liste de contrôle d'accès (ACL en Anglais) correspondante. Lorsque vous modifiez une carte, vous ne pouvez ajouter des ressources que si vous disposez de l'ACL correspondante.

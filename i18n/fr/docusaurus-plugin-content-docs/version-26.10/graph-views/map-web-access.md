---
id: map-web-access
title: Gérer les droits d'accès dans MAP
description: "Gérer les privilèges et droits d'accès aux vues Centreon MAP"
---

Cette page explique comment les administrateurs peuvent gérer qui est autorisé à créer des cartes dans Centreon MAP.

Les utilisateurs pouvant créer des cartes sont :

- Les administrateurs Centreon.
- Les utilisateurs appartenant à un groupe d'accès auquel le rôle de créateur est attribué.

Pour plus d'informations sur la façon dont l'accès aux cartes existantes est contrôlé par les privilèges, consultez la page [Comprendre les droits d'accès aux cartes (ACL)](map-understanding-access.md).

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

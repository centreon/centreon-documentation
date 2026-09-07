---
id: ba-simulation
title: Simulation
description: "Simuler l'état d'un arbre de dépendances d'une activité métier avant d'enregistrer votre configuration et de la pousser en production"
---

Utilisez le mode simulation pour valider le comportement d'un arbre de dépendances d'activité métier (BA) avant d'enregistrer vos modifications et de pousser la configuration en production.

Vous pouvez simuler l'état des indicateurs, ajuster les valeurs qui influencent le calcul du statut, puis décider a posteriori de conserver ou d'annuler les modifications effectuées.

## Accéder au mode simulation

- Le bouton **Mode simulation** se trouve en haut à droite de la page de configuration de la BA.

- Le bouton n'est activé que si l'activité métier parent possède au moins un indicateur rattaché. Si aucun indicateur n'est configuré, le bouton est désactivé et une notification indique que la simulation n'est pas possible sans au moins un indicateur.

## Utiliser le mode simulation

Cliquer sur le bouton **Mode simulation** fait passer la page de configuration dans un mode dédié. L'arbre de dépendances complet s'affiche, et par défaut, chaque indicateur de dernier niveau (un indicateur sans enfant, ou qui ne peut pas en avoir) démarre avec le statut OK.

### Simuler un nœud

Cliquez sur un nœud d'activité métier dans l'arbre pour ouvrir son panneau de configuration/simulation. Ce panneau comporte deux sections :

- Configuration de la BA

  - Modifiez la méthode de calcul appliquée au nœud.
  - Modifiez la façon dont une maintenance planifiée sur les indicateurs affecte le calcul du statut du nœud.

- Indicateurs de la BA

  Cette section liste tous les indicateurs rattachés au nœud, avec les informations suivantes : Nom, Statut, État.

## Quitter le mode simulation

Cliquez sur **Quitter la simulation** à tout moment pour sortir du mode simulation. Trois choix vous sont alors proposés :

- **Retour à la simulation :** les modifications effectuées sont conservées dans l'arbre.
- **Quitter sans appliquer :** aucune des modifications apportées aux nœuds ou aux indicateurs pendant la simulation n'est conservée.
- **Appliquer :** les modifications apportées aux nœuds et aux indicateurs sont reportées dans la configuration, prêtes à être enregistrées lors du prochain enregistrement de l'arbre complet.

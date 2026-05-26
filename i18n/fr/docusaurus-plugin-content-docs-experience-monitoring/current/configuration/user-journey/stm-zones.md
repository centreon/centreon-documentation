---
id: stm-zones
title: Superviser des parcours utilisateur non-publics (beta fermée)
---

Une Zone de Monitoring Synthétique (zone STM) privée vous permet de superviser vos parcours utilisateur sur des domaines internes ou des réseaux propres à votre organisation, via une sonde déployée dans votre infrastructure.

## Prérequis

- Une machine située dans votre infrastructure devra héberger une sonde. Elle devra pouvoir accéder à l'application à superviser.
- Les identifiants Docker fournis par Centreon. Les identifiants vous sont transmis par Centreon via un lien sécurisé Keeper. Sauvegardez les identifiants dans votre propre coffre-fort.
- Un parcours utilisateur configuré sur l'application interne à superviser.

## Étape 1 : Créer une nouvelle zone STM

1. Depuis la **Vue Globale**, ouvrez le sélecteur de site en haut à gauche et ouvrez la page de votre organisation.

![image](../../assets/configuration/user-journey/organization-page.png)

2. Dans la page de configuration de votre organisation, cliquez sur l'onglet **Zones de Monitoring Synthétique**.

3. Cliquez sur **+ Nouvelle Zone de Monitoring Synthétique**. Donnez un nom significatif (ex. : Paris Office) à la zone puis cliquez sur **+ Créer**.

Votre nouvelle zone apparaît désormais dans la liste.

## Étape 2 : Associer une sonde à la zone STM

1. Cliquez sur **Associer une sonde** à droite de votre zone.

Une fenêtre s'ouvre avec 2 commandes Docker :

2. Utilisez la première commande pour vous identifier au registry Docker Centreon avec [les identifiants fournis par Centreon](#prérequis) :

```shell
docker login docker.centreon.com/centreon-dem-beta
```

## Étape 3 : Créer et démarrer la sonde

1. Exécutez la deuxième commande obtenue à [l'étape 2](#étape-2--associer-une-sonde-à-la-zone-stm) pour créer la sonde et la démarrer. 

2. Rafraîchissez la page : une fois démarrée, la sonde s'enregistre automatiquement et apparaît à droite de la zone associée dans la liste des **Zones de Monitoring Synthétique**.

## Étape 4 : Associer la zone à un parcours utilisateur

1. Allez dans **Configuration** et sélectionnez le **Parcours Utilisateur** de votre site. 

2. Sur le parcours que vous souhaitez exécuter depuis votre zone privée, cliquez sur les trois points à droite puis sur **Avancé**.

3. Dans la fenêtre **Configuration avancée**, faites défiler jusqu'à la section **Zones de Monitoring Synthétique**. Votre zone privée apparaît sous **Zones Privées**. Sélectionnez-la et cliquez sur **Sauvegarder**.

Après un bref délai, la sonde aura réalisé son premier contrôle et votre supervision de parcours interne sera alors opérationnelle. Vous pouvez l'étudier de la même manière qu'un [parcours utilisateur](../../how-to-articles/user-journey-screen.md) normal.

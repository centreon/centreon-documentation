---
id: stm-zones
title: Superviser des parcours utilisateur non publics
description: Mettre en place une zone privée pour superviser des parcours internes non publics
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Une Zone de Monitoring Synthétique (zone STM) privée vous permet de superviser des parcours utilisateur sur des domaines internes ou des réseaux propres à votre organisation.
Pour ce faire, une sonde est déployée dans votre infrastructure. Vous pouvez également utiliser une sonde pour obtenir des recommandations personnalisées afin d'optimiser votre site.
Les sondes peuvent stocker leurs données en cache pour couvrir d'éventuelles coupures de réseau temporaires.

## Prérequis

- Une machine située dans votre infrastructure devra héberger une sonde. Elle devra pouvoir accéder à l'application à superviser.
- Un parcours utilisateur doit être configuré sur l'application interne à superviser.

## Étape 1 : Créer une nouvelle zone STM

1. Depuis la **Vue Globale**, ouvrez le sélecteur de site en haut à gauche et ouvrez la page de votre organisation.

![image](../../assets/configuration/user-journey/organization-page.png)

2. Dans la page de configuration de votre organisation, cliquez sur l'onglet **Zones de Monitoring Synthétique**.

3. Cliquez sur **+ Nouvelle Zone de Monitoring Synthétique**. Donnez un nom significatif (ex. : Paris Office) à la zone puis cliquez sur **+ Créer**.

Votre nouvelle zone apparaît désormais dans la liste.

## Étape 2 : Obtenir un jeton de sonde

Toujours dans la page de l'organisation, ouvrez l'onglet **Jetons**. Cliquez sur **Créer un jeton** et suivez les étapes pour créer un jeton de sonde.

Gardez votre jeton. Vous en aurez besoin pour créer la sonde lors de la prochaine étape.

## Étape 3 : Associer une sonde à la zone STM

Cliquez sur **Associer une sonde** à droite de votre zone. Une fenêtre contenant plusieurs commandes s'ouvre.
Exécutez la commande Docker pour vous connecter au registre.

## Étape 4 : Créer et démarrer la sonde

<Tabs groupId="cxmProbes" queryString>
<TabItem value="Sonde STM">

Les sondes STM collectent les métriques de performance habituelles utilisées par Experience Monitoring.

1. Pour créer et démarrer une sonde STM, exécutez la commande de sonde STM obtenue à [l'étape 3](#étape-3--associer-une-sonde-à-la-zone-stm) avec le jeton de sonde.

2. Rafraîchissez la page : une fois démarrée, la sonde s'enregistre automatiquement et apparaît à droite de la zone associée dans la liste des **Zones de Monitoring Synthétique**.

</TabItem>
<TabItem value="Sonde de recommandations">

Les sondes de recommandations tournent une fois par jour pour vous faire des recommandations personnalisées sur la façon d'optimiser votre site.

1. Pour créer et démarrer une sonde de recommandations, exécutez la commande de sonde de recommandations obtenue à [l'étape 3](#étape-3--associer-une-sonde-à-la-zone-stm) avec le jeton de sonde.

2. Rafraîchissez la page : une fois démarrée, la sonde s'enregistre automatiquement et apparaît à droite de la zone associée dans la liste des **Zones de Monitoring Synthétique**. Les sondes de recommandations se différencient des sondes STM grâce à leur icône de jumelles.

Notez qu'il faut attendre jusqu'à 24 heures pour que la sonde ait assez de données pour commencer à faire des recommandations.

</TabItem>
</Tabs>

## Étape 5 : Associer la zone à un parcours utilisateur

1. Allez dans **Configuration** et sélectionnez le **Parcours Utilisateur** de votre site. 

2. Sur le parcours que vous souhaitez exécuter depuis votre zone privée, cliquez sur les trois points à droite puis sur **Avancé**.

3. Dans la fenêtre **Configuration avancée**, faites défiler jusqu'à la section **Zones de Monitoring Synthétique**. Votre zone privée apparaît sous **Zones Privées**. Sélectionnez-la et cliquez sur **Sauvegarder**.

Après un bref délai, la sonde aura réalisé son premier contrôle et votre supervision de parcours interne sera alors opérationnelle. Vous pouvez étudier ce parcours de la même manière qu'un [parcours utilisateur](../../how-to-articles/user-journey-screen.md) normal.

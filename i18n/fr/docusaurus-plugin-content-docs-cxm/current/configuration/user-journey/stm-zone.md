---
id: stm-zones
title: Supervision de parcours utilisateur non-publics
---

Une Zone de Monitoring Synthétique (STM) privée vous permet de superviser vos parcours utilisateur sur des domaines internes ou des réseaux propres à votre organisation, via une sonde déployée dans votre infrastructure.

## Étape 1 : Ouvrir la page de l'organisation

Depuis la **Vue Globale**, ouvrez le sélecteur de site en haut à gauche et ouvrez la page de votre organisation.

![image](../../assets/configuration/user-journey/organization-page.png)

## Étape 2 : Accéder à l'onglet Zones STM

Dans la page de configuration de votre organisation, cliquez sur l'onglet **Zones de Monitoring Synthétique**.

## Étape 3 : Créer une nouvelle zone STM

Cliquez sur **+ Nouvelle Zone de Monitoring Synthétique**, donnez-lui un nom significatif (ex. : Paris Office), puis cliquez sur **+ Créer**.

Votre nouvelle zone apparaît désormais dans la liste.

## Étape 4 : Associer une sonde

Cliquez sur **Associer une sonde** depuis le bouton en haut à droite ou directement sur la ligne de votre zone.

Une fenêtre s'ouvre avec 2 commandes Docker :

la première sert à vous identifier au registry Centreon (voir [étape 5](#étape-5--obtenir-les-identifiants-docker-depuis-keeper))

la seconde sert à lancer la sonde (voir [étape 6](#étape-6--démarrage-de-la-sonde))

## Étape 5 : Obtenir les identifiants Docker depuis Keeper

1. Les identifiants vous sont partagés par Centreon via un lien sécurisé Keeper.

2. Contactez Centreon pour recevoir le lien Keeper. Sauvegardez les identifiants dans votre propre coffre-fort.

3. Une fois les identifiants obtenus, connectez-vous au registre Docker :

'''shell
docker login docker.centreon.com/centreon-dem-beta
Username: \<username>
Password: \<password>
'''

## Étape 6 : Démarrage de la sonde

Une fois démarrée, la sonde s'enregistre automatiquement et apparaît dans la liste des zones STM.

## Étape 7 : Associer la zone à un parcours utilisateur

1. Accédez à l'onglet **Parcours Utilisateur** de votre site. Sur le parcours que vous souhaitez exécuter depuis votre zone privée, cliquez sur les trois points à droite puis sur **Avancé**.

2. Dans la fenêtre **Configuration avancée**, faites défiler jusqu'à la section **Zones de Monitoring Synthétique**. Votre zone privée apparaît sous Zones Privées. Sélectionnez-la.
Cliquez sur Sauvegarder.

3. Votre supervision de parcours interne est désormais en place ! Vous pouvez l'étudier de la même manière qu'un [parcours utilisateur](../how-to-articles/user-journey-screen.md) normal.

## Troubleshooting

### Ce nom de domaine n'est pas autorisé pour votre site

Si vous obtenez ce message lorsque vous essayez de configurer une action de navigation vers un lien, cela signifie que le domaine que vous essayez de joindre n'a pas encore été autorisé par Centreon.

Si ce n'est pas encore fait, ouvrez un ticket avec le support Centreon pour que votre domaine soit manuellement approuvé.

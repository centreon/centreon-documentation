---
id: stm-zones
title: Zones de monitoring synthétique privée
---

Une Zone de Monitoring Synthétique (STM) privée vous permet de superviser vos parcours utilisateur dans une infrastructure interne, via une sonde déployée dans votre environnement.
C'est particulièrement utile pour tester des parcours sur des domaines internes ou des réseaux spécifiques à votre organisation non accessibles au public.


## Étape 1 : Ouvrir la configuration de l'organisation

Depuis la Vue Globale, ouvrez le sélecteur de site en haut à gauche et ouvrez dans un nouvel onglet la page de votre organisation.

Gardez les deux onglets ouverts — vous aurez besoin de l'onglet site plus tard pour récupérer votre token.



## Étape 2 : Accéder à l'onglet Zones STM

Dans la page de configuration de votre organisation, cliquez sur l'onglet "Zones de Monitoring Synthétique".


## Étape 3 : Créer une nouvelle Zone STM

Cliquez sur **+ Nouvelle Zone de Monitoring Synthétique**, donnez-lui un nom significatif (ex. : Paris Office), puis cliquez sur **+ Créer**.
Votre nouvelle zone apparaît désormais dans la liste.


## Étape 4 : Associer une sonde

Cliquez sur **Associer une sonde** depuis le bouton en haut à droite ou directement sur la ligne de votre zone.

Une fenêtre modale s'ouvre avec 2 commandes Docker :

la première sert à vous identifier au registry Centreon (voir étape 5)

la seconde sert à lancer la sonde (voir étape 6)


## Étape 5 : Obtenir les identifiants Docker depuis Keeper

L'image de la sonde est stockée dans un registre privé. Les identifiants doivent être partagés via un lien sécurisé Keeper.

Contactez Centreon pour recevoir le lien Keeper. Sauvegardez les identifiants dans votre propre coffre-fort.

Une fois les identifiants obtenus, connectez-vous au registre Docker :

'''shell
docker login docker.centreon.com/centreon-dem-beta
Username: <entrez votre nom utilisateur>
Password: <entrez votre mot de passe>
'''

## Étape 6 : Lancement de la sonde

Une fois lancée, la sonde s'enregistre automatiquement et apparaît sous votre zone dans la liste des Zones STM.

## Étape 7 : Associer la zone à un parcours utilisateur

Accédez à l'onglet Parcours Utilisateur de votre site. Sur le parcours que vous souhaitez exécuter depuis votre zone privée, cliquez sur les trois points à droite puis sur **Avancé**.

Dans la fenêtre Édition avancée, faites défiler jusqu'à la section Zones de Monitoring Synthétique. Votre zone privée apparaît sous Zones Privées. Sélectionnez-la.
Cliquez sur Sauvegarder
